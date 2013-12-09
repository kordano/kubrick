(ns kubrick.core
  (:require goog.net.WebSocket
            [dommy.core :as dom]
            [hiccups.runtime :as hiccupsrt]
            [cljs.reader :refer [read-string]]
            [clojure.browser.repl]
            [clojure.set :refer [select]]
            [cljs.core.async :as async :refer [chan close! put! timeout]])
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
(deftemplate movie-input-template []
  [:tr#input-row
   [td
     [:input.general-input {:id "title-input" :type "text" :name "title"}]]
   [td
     [:input.general-input {:id "year-input" :type "text" :name "year"}]]
   [td
     [:input.general-input {:id "rating-input" :type "text" :name "rating"}]]
   [:td [:button#movie-add-button {:type "button"} "add"]]])


(deftemplate movie-output-template []
  [:div.output-div
   [:table#output-table
    [:tr
     [:th "Title"]
     [:th "Year"]
     [:th "Rating"]]]])


(deftemplate movie-template [movie]
  [:tr.movie-row {:id (movie :_id)}
   [:td (movie :title)]
   [:td (movie :year)]
   [:td (movie :rating)]
   [:td [:a.movie-remove-button "remove"]]])


(defn create-ui []
  (let [body (sel1 :body)]
    (dom/append!
     body
     [:nav
      [:ul
       [:li [:a.nav-entry"Home"]
        [:ul
         [:li [:a#connect-button  "Connect"]]
         [:li [:a#disconnect-button "Disconnect"]]]]]])))


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
    (swap! client-state assoc :movie-data new-data :intermediate differences)
    (log differences)
    (doall (map (fn [entry] (->> (sel :.movie-row)
                                (filter #(= (dom/attr % "id") (entry :_id)))
                                first
                                dom/remove!))
                (differences :removals)))
    (doall (map #(dom/append! output-table (movie-template %)) (differences :additions)))
    ;(doall (map #(dom/replace! (sel1 (keyword (str "#" (% :_id)))) (movie-template %)) (differences :updates)))
    (doall (map
            (fn [button]
              (set! (.-onclick button)
                    (fn []
                      (let [node-parents (apply vector (dom/ancestor-nodes button))
                            id (dom/attr (node-parents 2) "id")]
                        (send! {:type "delete" :data {:movies id}})))))
            (sel :.movie-remove-button)))))


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
  (set! (.-onclick (sel1 :#disconnect-button)) (fn []
                                 (.close @websocket*)
                                 (reset! websocket* nil)))
  (log "websocket loaded."))


(defn enable-onclick []
  (do
    (set! (.-onclick (sel1 :#movie-add-button))
          (fn [] (let [title (dom/value (sel1 :#title-input))
                      year (dom/value (sel1 :#year-input))
                      rating (dom/value (sel1 :#rating-input))
                      data {:type "put" :data {:movie {:title title :year year :rating rating}}}
                      body (sel1 :body)]
                  (go
                    (log (str "push to channel: " (str data)))
                    (send! data)
                    (doseq [input-field (sel :.general-input)]
                      (dom/set-value! input-field ""))))))
    (set! (.-onclick (sel1 :#connect-button)) (fn [] (establish-websocket)))))

(sel :.general-input)

(defn init []
  (let [body (sel1 :body)]
    (do
      (create-ui)
      (dom/append! body (movie-output-template))
      (dom/append! (sel1 :#output-table) (movie-input-template))
      (enable-onclick))))

(set! (.-onload js/window) init)
