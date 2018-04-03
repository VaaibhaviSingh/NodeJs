const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/conFusion';

//Nesting of callback functions
//To connect to MongoDB server
MongoClient.connect(url).then((client) => {

  console.log("Connected correctly to the server");

  var db = client.db('conFusion');

  //Chained .then()
  dboper.insertDocument(db, { name: 'Vadonut', description: 'Test' }, 'dishes')
  .then((result) => {
    console.log('Insert Document:\n', result.ops);
    return dboper.findDocuments(db, 'dishes');
  })
  .then((docs) => {
    console.log('Found Documents:\n', docs);
    //We don't need to specify the document we can specify one field and it will find the document
    return dboper.updateDocument(db, { name: 'Vadonut' }, { description: 'Updated Test'}, 'dishes');
  })
  .then((result) => {
    console.log('Updated Document:\n', result.result);
    return dboper.findDocuments(db, 'dishes');
  })
  .then((docs) => {
    console.log('Found Updated Documents:\n', docs);
    return db.dropCollection('dishes');
  })
  .then((result) => {
      console.log('Dropped collection: ', result);
      client.close();
  })
  .catch((err) => console.log(err));
}, (err) => console.log(err))
.catch((err) => console.log(err));
