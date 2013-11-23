(ns kubrick.core
  (:require [goog.net.Jsonp :as jsonp]
            goog.net.WebSocket
            [dommy.core :as dom]
            [hiccups.runtime :as hiccupsrt]
            [cljs.reader :refer [read-string]]
            [clojure.browser.repl]
            [cljs.core.async :as async :refer [chan close! put!]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]
                   [hiccups.core :as hiccups]
                   [dommy.macros :refer [sel sel1 node deftemplate]]))


;; fire up repl
#_(do
    (def repl-env (reset! cemerick.austin.repls/browser-repl-env
                          (cemerick.austin/repl-env)))
    (cemerick.austin.repls/cljs-repl repl-env))

(defn log [s]
  (.log js/console (str s)))

(def state (atom {:movie-list []
                  :user-list []}))


(def websocket* (atom nil))


(defn- send-data [data]
  (.send @websocket* (str data)))


(defn- receive-data [raw-data]
  (let [body (sel1 :body)
        data (read-string raw-data)]
    (do
      (dom/append! body [:p (str data)]))))


(defn establish-websocket []
  (log "establishing websocket ...")
  (reset! websocket* (js/WebSocket. "ws://localhost:9090"))
  (doall
   (map #(aset @websocket* (first %) (second %))
        [["onopen" (fn [] (do
                           (log "channel opened")))]
         ["onclose" (fn [] (log "channel closed"))]
         ["onerror" (fn [e] (log (str "ERROR:" e)))]
         ["onmessage" (fn [m]
                        (let [data (.-data m)]
                          (do
                            (log (str "receive channel data: " (str data)))
                            (receive-data data))))]]))
  (set! (.-onclick (sel1 :#kill-ws)) (fn []
                                 (.close @websocket*)
                                 (reset! websocket* nil)))
  (log "websocket loaded."))


(deftemplate input-template [name]
  [:div.input-div
   [:p name]
   [:form
    [:input.general-input {:id (str name "-input") :type "text" :name name}]]])


(deftemplate output-template [data]
  [:div.output-div
   [:table
    [:tr
     (map #(vector :td %) data)]]])


(defn enable-onclick []
  (do
    (set! (.-onclick (sel1 :#commit-button))
          (fn [] (let [title (dom/value (sel1 :#title-input))
                      year (dom/value (sel1 :#year-input))
                      rating (dom/value (sel1 :#rating-input))
                      data {:title title :year year :rating rating}
                      body (sel1 :body)]
                  (go
                    (log (str "push to channel: " (str data)))
                    (.send @websocket* data)))))
    (set! (.-onclick (sel1 :#establish-ws))
          (fn [] (establish-websocket)))))


(defn init []
  (let [body (sel1 :body)]
    (do
      (dom/append! body (input-template "title"))
      (dom/append! body (input-template "year"))
      (dom/append! body (input-template "rating"))
      (dom/append! body [:button#commit-button {:type "button"} "Commit"])
      (dom/append! body [:button#establish-ws {:type "button"} "Connect"])
      (dom/append! body [:button#kill-ws {:type "button"} "Disconnect"])
      (enable-onclick))))

(set! (.-onload js/window) init)
