(ns kubrick.core
  (:require [goog.net.Jsonp :as jsonp]
            [dommy.core :as dom]
            [hiccups.runtime :as hiccupsrt]
            [cljs.reader :refer [read-string]]
            [clojure.browser.repl]
            [cljs.core.async :as async :refer [chan close! put!]])
  (:require-macros [cljs.core.async.macros :refer [go alt!]]
                   [hiccups.core :as hiccups]
                   [dommy.macros :refer [sel sel1 node deftemplate text]]))


;; fire up repl
#_(do
    (def repl-env (reset! cemerick.austin.repls/browser-repl-env
                          (cemerick.austin/repl-env)))
    (cemerick.austin.repls/cljs-repl repl-env))


(def state (atom {:movie-list []
                  :user-list []}))


(def websocket* (atom nil))

(defn log [s]
  (.log js/console (str s)))


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
    (set! (.-onclick (sel1 :#add-button))
          (fn [] (let [input-fields (sel :.general-input)
                      new-entries (map #(dom/value %) input-fields)
                      body (sel1 :body)]
                  (do
                    (dom/append! body (output-template new-entries))
                    (log "send to websocket ...")
                    (map #(.send @websocket* ) new-entries)))))))



(doseq [field (sel :.general-input)]
  (log (dom/value field)))

(defn- send-data [data]
  (.send @websocket* (str data)))


(defn- receive-data [data]
  (let [body (sel1 :body)]
    (dom/append! body [:p data])))


(defn establish-websocket []
  (log "establishing websocket ...")
  (reset! websocket* (js/WebSocket. "ws://localhost:8008"))
  (doall
   (map #(aset @websocket* (first %) (second %))
        [["onopen" (fn [] (do
                           (log "OPEN")
                           (.send @websocket* (str "CLIENT"))))]
         ["onclose" (fn [] (log "CLOSE"))]
         ["onerror" (fn [e] (log (str "ERROR:" e)))]
         ["onmessage" (fn [m]
                        (let [data (.-data m)]
                          (receive-data data)))]]))
  (set! (.-onunload js/window) (fn []
                                 (.close @websocket*)
                                 (reset! @websocket* nil)))
  (log "websocket loaded."))



(defn initialize-ui []
  (let [body (sel1 :body)]
    (do
      (dom/append! body (input-template "title"))
      (dom/append! body (input-template "year"))
      (dom/append! body (input-template "rating"))
      (dom/append! body [:button#add-button {:type "button"} "Add"])
      (enable-onclick))))

(log "let's rock websockets!")


(initialize-ui)
(establish-websocket)
