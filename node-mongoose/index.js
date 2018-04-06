const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

//Importing Dishes model that we created
const Dishes = require('./models/dishes');

//To establish connection with MongoDB server
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url, {
	//useMongoClient: true 
	//In the new version it is not required
});

connect.then((db) => {
	
	var db = mongoose.connection;

	console.log('Connected correctly to server');

    Dishes.create({
    	//In here we can specify a  document
    	name: 'Uthappizza',
    	description: 'test'
    })
    .then((dish) => {
    	console.log(dish);
   		//exec() will ensure that this is executed
   		return Dishes.findByIdAndUpdate(dish._id, {
    	    $set: {description: 'Updated Test'}
    	},{
    	//Once the update of the dish is complete, then this will return the updated dish back to us
    	new: true
   		})
   		.exec();
   	})
   	.then((dish) => {
   		console.log(dish);

   		dish.comments.push({
   			//We can push the comments document in here
   			rating: 5,
   			comment: 'I am getting a sinking feeling!',
   			author: 'Leonardo di Carpaccio'
   		});

   		return dish.save();
    })
    .then((dish) => {
    	console.log(dish);

   		return mongoose.connection.db.collection('dishes').drop();
   	})
   	.then(() => {
   		return db.close();
   	})
   	.catch((err) => {
   		console.log(err);
   	});
});
