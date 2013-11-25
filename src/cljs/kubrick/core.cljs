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


                                        ; HTML Templates
(deftemplate input-template [name]
  [:div.input-div
   [:p name]
   [:form
    [:input.general-input {:id (str name "-input") :type "text" :name name}]]])


(deftemplate output-template []
  [:div.output-div
   [:table#output-table
    [:tr
     [:th "Title"]
     [:th "Year"]
     [:th "Rating"]]]])


(deftemplate movie-template [movie]
  [:tr
   [:td (movie :title)]
   [:td (movie :year)]
   [:td (movie :rating)]])

                                        ; State

(def client-state
  (atom
   {:movie-data []}))


(def websocket* (atom nil))


(defn- send-data [data]
  (.send @websocket* (str data)))


(defn update-dom []
  (let [output-dom (sel1 :#output-table)
        movie-data ((deref client-state) :movie-data)]
    (doall
     (map #(dom/append! output-dom (movie-template %)) movie-data))))


(defn- receive-data [raw-data]
  (let [data (read-string raw-data)]
    (do
      (swap! client-state assoc :movie-data (data :movies))
      (update-dom))))


(defn establish-websocket []
  (log "establishing websocket ...")
  (reset! websocket* (js/WebSocket. "ws://localhost:9090"))
  (doall
   (map #(aset @websocket* (first %) (second %))
        [["onopen" (fn [] (do
                           (log "channel opened")
                           (.send @websocket* {:type "query" :data []})))]
         ["onclose" (fn [] (log "channel closed"))]
         ["onerror" (fn [e] (log (str "ERROR:" e)))]
         ["onmessage" (fn [m]
                        (let [data (.-data m)]
                          (do
                            (log (str "receive channel data: " (apply str data)))
                            (receive-data data))))]]))
  (set! (.-onclick (sel1 :#kill-ws)) (fn []
                                 (.close @websocket*)
                                 (reset! websocket* nil)))
  (log "websocket loaded."))


(defn enable-onclick []
  (do
    (set! (.-onclick (sel1 :#commit-button))
          (fn [] (let [title (dom/value (sel1 :#title-input))
                      year (dom/value (sel1 :#year-input))
                      rating (dom/value (sel1 :#rating-input))
                      data {:type "insertion" :data {:movie {:title title :year year :rating rating}}}
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
      (dom/append! body (output-template))
      (dom/append! body [:button#commit-button {:type "button"} "Commit"])
      (dom/append! body [:button#establish-ws {:type "button"} "Connect"])
      (dom/append! body [:button#kill-ws {:type "button"} "Disconnect"])
      (enable-onclick))))

(set! (.-onload js/window) init)
