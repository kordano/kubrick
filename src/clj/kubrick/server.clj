(ns kubrick.server
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [clojure.core.async :refer [chan go >! <!]]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET defroutes)]
            [ring.adapter.jetty :refer [run-jetty]]
            [clojure.java.io :as io]
            [cheshire.core :refer :all]
            [kubrick.datalog :as db :refer [get-couchdb-entries put!]]
            [org.httpkit.server :refer [with-channel on-close on-receive run-server send!]]))



(defn destructure-request [{type :type data :data}]
  (cond
   (= type "query") (db/get-couchdb-entries)
   (= type "insertion") (db/put! data)
   :else "WRONG REQUEST"))


                                        ; websocket server
(defn handler [request]
  (with-channel request channel
    (on-close channel (fn [status] (println "channel closed: " status)))
    (on-receive channel (fn [data] ;; echo it back
                          (do
                            (println (str "data received: " (str (read-string data))))
                            (send! channel (str (destructure-request (read-string data)))))))))


(defn run-ws []
  (defonce ^:private ws-server
    (run-server handler {:port 9090}))
  ws-server)



                                        ; ring server
(enlive/deftemplate page
  (io/resource "public/index.html")
  []
  [:body] (enlive/append
           (enlive/html [:script (browser-connected-repl-js)])))


(defroutes site
  (resources "/")
  (GET "/*" req (page)))


(defn run []
  (defonce ^:private server
    (run-jetty #'site {:port 8080 :join? false}))
  server)


#_(run-ws)
#_(run)
