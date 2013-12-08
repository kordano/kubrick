(ns kubrick.core
  (:require goog.net.WebSocket
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
  [:tr.movie-row {:id (movie :id)}
   [:td (movie :title)]
   [:td (movie :year)]
   [:td (movie :rating)]])

                                        ; State

(def client-state (atom {:movie-data #{}}))

(def websocket* (atom nil))


(defn movie-difference [old-movies new-movies]
  (let [old (into #{} (remove new-movies old-movies))
        new (into #{} (remove old-movies new-movies))]
    {:updates (filter #(contains? (into #{} (map :id old)) (% :id)) new)
     :additions (remove #(contains? (into #{} (map :id old)) (% :id)) new)
     :removals (remove #(contains? (into #{} (map :id new)) (% :id)) old)}))


(defn- send! [data]
  (.send @websocket* (str data)))


(defn update! [data]
  (let [new-data (into #{} (data :movies))
        current-data ((deref client-state) :movie-data)
        differences (movie-difference current-data new-data)
        output-table (sel1 :#output-table)]
    (swap! client-state assoc :movie-data new-data)
    (log differences)))


(defn- take! [raw-data]
  (update! (read-string raw-data)))


(defn establish-websocket []
  (log "establishing websocket ...")
  (reset! websocket* (js/WebSocket. "ws://localhost:9090"))
  (doall
   (map #(aset @websocket* (first %) (second %))
        [["onopen" (fn [] (do
                           (log "channel opened")
                           (.send @websocket* {:type "get" :data []})))]
         ["onclose" (fn [] (log "channel closed"))]
         ["onerror" (fn [e] (log (str "ERROR:" e)))]
         ["onmessage" (fn [m]
                        (let [data (.-data m)]
                          (do
                            (log (str "receive channel data: " (apply str data)))
                            (take! data))))]]))
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
                      data {:type "put" :data {:movie {:title title :year year :rating rating}}}
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
