(ns kubrick.server
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [clojure.core.async :refer [chan go >! <!]]
            [net.cgrand.enlive-html :as enlive]
            [compojure.route :refer (resources)]
            [compojure.core :refer (GET defroutes)]
            [ring.adapter.jetty :refer [run-jetty]]
            [clojure.java.io :as io]
            [ring.middleware.reload :as reload]
            [cheshire.core :refer :all]
            [org.httpkit.server :refer [with-channel on-close on-receive run-server send!]]))


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


                                        ; websocket server

(defn handler [request]
  (with-channel request channel
    (on-close channel (fn [status] (println "channel closed: " status)))
    (on-receive channel (fn [data] ;; echo it back
                          (do
                            (println (type (read-string data)))
                            (send! channel (str (read-string data))))))))


(defn run-ws []
  (defonce ^:private ws-server
    (run-server handler {:port 9090}))
  ws-server)

#_(run-ws)
#_(run)

#_(reload/wrap-reload #'handler)
