const assert = require('assert');

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);

  coll.insert(document, (err, result) => {
    assert.equal(err, null);
    console.log('Inserted ' + result.result.n + ' documents into the collection ' + collection);
    callback(result);
  });
};

exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection);
  coll.find().toArray((err, docs) => {
    assert.equal(err, null);
    callback(docs);
  });
};

exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection);
  coll.deleteOne(document, (err, result) => {
    assert.equal(err, null);
    //We use , here as document is a js object so using , will print the document
    console.log('Removed the document ', document);
    callback(result);
  });
};

exports.updateDocument = (db, document, update, collection, callback) => {
  const coll = db.collection(collection);
  // { $set: update } will take in the update information that we are passing in
  // and provide it to updteOne()
  //It has the fields that we are updating
  coll.updateOne(document, { $set: update }, null, (err, result) => {
    assert.equal(err, null);
    //We use , here as update is a js object so using , will print it
    console.log('Updated the document with ', update);
    callback(result);
  });
};
