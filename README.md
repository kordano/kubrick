# kubrick

Sample CMS with websockets and key-value store.

## Usage

First build clojurescript
```
lein cljsbuild once
```

Start repl of your choice and run server, e.g. in emacs open server.clj and within a shell :

```
lein repl
(start)
```

For live-coding in clojurescript connect to nrepl and evaluate in core.cljs:

```
(do
  (def repl-env (reset! cemerick.austin.repls/browser-repl-env (cemerick.austin/repl-env)))
  (cemerick.austin.repls/cljs-repl repl-env))
```

## License

Copyright © 2013 Konrad Kühne

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
