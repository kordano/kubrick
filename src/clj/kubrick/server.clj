(ns kubrick.server
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [clojure.core.async :refer [chan go >! <!]]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET defroutes)]
            [ring.adapter.jetty :refer [run-jetty]]
            [clojure.java.io :as io]
            [cheshire.core :refer :all]
            [kubrick.datalog :as db :refer [get-couchdb-entries put! delete!]]
            [org.httpkit.server :refer [with-channel on-close on-receive run-server send!]]))



(defn destructure-request [{type :type data :data}]
  (case type
    "get" (db/get-couchdb-entries "movies")
    "put" (db/put! data)
    "delete" (db/delete! data)
    "WRONG REQUEST"))

(let [id (-> (destructure-request {:type "get" :data []}) :movies first :_id)]
  (destructure-request {:type "delete" :data {:movies id}}))

                                        ; websocket server
(defn handler [request]
  (with-channel request channel
    (on-close channel (fn [status] (println "channel closed: " status)))
    (on-receive channel (fn [data]
                          (do
                            (println (str "data received: " (str (read-string data))))
                            (send! channel (str (destructure-request (read-string data)))))))))


(def stop-ws (run-server handler {:port 9090}))
#_(stop-ws)


                                        ; ring server
(enlive/deftemplate page
  (io/resource "public/index.html")
  []
  [:body] (enlive/append
           (enlive/html [:script (browser-connected-repl-js)])))


(defroutes site
  (resources "/")
  (GET "/*" req (page)))

(def html-server (run-jetty #'site {:port 8080 :join? false}))
