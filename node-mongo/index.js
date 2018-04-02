const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/conFusion';

//Nesting of callback functions
//To connect to MongoDB server
MongoClient.connect(url, (err, client) => {

  assert.equal(err, null); //Assert to check if the error is null

  console.log("Connected correctly to the server");

  var db = client.db('conFusion');
  const collection = db.collection("dishes");

  collection.insertOne({"name": "Uthappizza", "description": "test"}, (err, result) => {
    assert.equal(err, null);

    console.log("After Insert:\n");
    console.log(result.ops); //Number of operations performed

    //Empty json string so that it will search everything that is there in the collection
    collection.find({}).toArray((err, docs) => {
      assert.equal(err, null);

      console.log("Found:\n");
      console.log(docs);

      db.dropCollection("dishes", (err, result) => {
        assert.equal(err, null);

        client.close();
      });
    });
  });
});
