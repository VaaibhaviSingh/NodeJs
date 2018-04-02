const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/conFusion';

//Nesting of callback functions
//To connect to MongoDB server
MongoClient.connect(url, (err, client) => {

  assert.equal(err, null); //Assert to check if the error is null

  console.log("Connected correctly to the server");

  var db = client.db('conFusion');

  dboper.insertDocument(db, { name: 'Vadonut', description: 'Test' }, 'dishes', (result) => {
    console.log('Insert Document:\n', result.ops);

    dboper.findDocuments(db, 'dishes', (docs) => {
      console.log('Found Documents:\n', docs);

      //We don't need to specify the document we can specify one field and it will find the document
      dboper.updateDocument(db, { name: 'Vadonut' }, { description: 'Updated Test'}, 'dishes', (result) => {
        console.log('Updated Document:\n', result.result);

        dboper.findDocuments(db, 'dishes', (docs) => {
          console.log('Found Updated Documents:\n', docs);

          db.dropCollection('dishes', (result) => {
            console.log('Dropped collection: ', result);

            client.close();
          });
        });
      });
    });
  });
});
