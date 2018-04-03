const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  return coll.insert(document);
  //Instead of the lenthy code earlier we are now returning the promises directly
};

exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection);
  return coll.find().toArray();
  //Instead of the lenthy code earlier we are now returning the promises directly
};

exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  return coll.deleteOne(document);
  //Instead of the lenthy code earlier we are now returning the promises directly
};

exports.updateDocument = (db, document, update, collection, callback) => {
  const coll = db.collection(collection);
  // { $set: update } will take in the update information that we are passing in
  // and provide it to updteOne()
  //It has the fields that we are updating
  return coll.updateOne(document, { $set: update }, null);
  //Instead of the lenthy code earlier we are now returning the promises directly
};
