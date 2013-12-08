(ns kubrick.datalog
  (:use [fogus.datalog.bacwn :only (build-work-plan run-work-plan)]
        [fogus.datalog.bacwn.macros :only (<- ?- make-database)]
        [fogus.datalog.bacwn.impl.rules :only (rules-set)]
        [fogus.datalog.bacwn.impl.database :only (add-tuples add-tuple database-counts get-relation)]
        [com.ashafa.clutch :exclude (:assoc!)])
  (:require [fogus.datalog.bacwn.impl.literals :as literals]))


(defn now [] (new java.util.Date))


                                        ; ---- COUCHDB stuff ----

(defn get-all-ids [database]
  (map #(:id %) (all-documents database)))


(defn get-all-documents [database]
  (map #(get-document database %) (get-all-ids database)))


(defn init-datalog-dbs []
  "Create datalog databases if not available"
  (map get-database ["datalog-users" "movies"]))


(defn get-couchdb-entries [db]
  (let [raw-entries (get-all-documents db)
        entries (map #(dissoc % :_id :_rev) raw-entries)]
    {(keyword db) raw-entries}))


(defn generate-id []
  (let [ids (map #(:id %) (get-all-documents "movies"))]
    (if-not (empty? ids)
      (inc (apply max ids))
      0)))


(defn remove-from-local-db [db id]
  (let [document (get-document db id)]
    (delete-document db document)))

(defn write-to-local-db [db]
  "write all relations to db"
  (doall (map #(put-document "movies" %) (:data (get-relation db :movie)))))


(defn convert-to-datalog-entry [entry db]
  (let [raw-entry (dissoc entry :_rev :_id)
        raw-keys (keys raw-entry)]
    (apply vector (keyword db) (flatten (map #(vector % (% raw-entry)) raw-keys)))))


(defn convert-entries []
  (let [users (map #(convert-to-datalog-entry % "users") (:users (get-couchdb-entries)))
        movies (map #(convert-to-datalog-entry % "movies") (:movies (get-couchdb-entries)))]
    (apply conj users movies)))



                                        ; ----- datalog magic -----

(def db-base
  (make-database
   (relation :user [:id :surname :forname :call-sign :creation-date])
   (index :user :call-sign)

   (relation :movie [:id :title :year :rating])
   (index :movie :title)))


(defn db [tuple]
  (add-tuples db-base tuple))


(def rules
  (rules-set
   (<- (:creator-id :title ?t :name ?n)
       (:movie :id ?i :title ?t)
       (:user :id ?i :name ?n))))


;; --- gate to the outer worlds ---

(defn put! [data]
  (let [movie (flatten (apply vector (data :movie)))]
    (do
      (write-to-local-db
       (db
        (apply vector :movie :id (generate-id) movie))))
    {:movies (get-all-documents "movies")}))

(defn delete! [{id :movies}]
  (do
    (remove-from-local-db "movies" id))
    {:movies (get-all-documents "movies")})
