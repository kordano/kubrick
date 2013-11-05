(defproject kubrick "0.1.0-SNAPSHOT"
  :description "simple movie database"

  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1934"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]
                 ;;[org.bodil/cljs-noderepl "0.1.10"]
                 [ring "1.2.0"]
                 [compojure "1.1.5"]
                 [enlive "1.1.1"]
                 [prismatic/dommy "0.1.1"]
                 [hiccups "0.2.0"]
                 [aleph "0.3.0"]
                 ]
  :profiles {:dev {:repl-options {:init-ns kubrick.server}
                   :plugins [[lein-cljsbuild "0.3.2"]
                             [com.cemerick/austin "0.1.1"]]
                   :cljsbuild {:builds [{:source-paths ["src/cljs"]
                                         :compiler {:output-to "resources/public/js/main.js"
                                                    :optimizations :simple
                                                    :pretty-print true}}]}}})
