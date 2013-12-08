(defproject kubrick "0.1.0-SNAPSHOT"
  :description "simple movie database"

  :url "http://example.com/FIXME"

  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1934"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]
                 [ring "1.2.0"]
                 [compojure "1.1.5"]
                 [http-kit "2.1.12"]
                 [cheshire "5.2.0"]
                 [fogus/bacwn "0.3.0"]
                 [com.ashafa/clutch "0.4.0-RC1"]
                 [enlive "1.1.1"]
                 [prismatic/dommy "0.1.1"]
                 [hiccups "0.2.0"]]

  :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}

  :profiles {:dev {:repl-options {:init-ns kubrick.server}
                   :plugins [[lein-cljsbuild "0.3.2"]
                             [com.cemerick/austin "0.1.3"]
                             [lein-kibit "0.0.8"]]
                   :cljsbuild {:builds [{:source-paths ["src/cljs"]
                                         :compiler {:output-to "resources/public/js/main.js"
                                                    :optimizations :simple
                                                    :pretty-print true}}]}}})
