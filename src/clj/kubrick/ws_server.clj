(ns kubrick.ws-server
  (:use [lamina.core]
        [aleph.http]))

(def broadcast-channel (channel))

(defn chat-handler [ch handshake]
  (receive ch
    (fn [input]
      (siphon (map* #(str input ": " %) ch) broadcast-channel)
      (siphon broadcast-channel ch))))

(start-http-server chat-handler {:port 8008 :websocket true})
