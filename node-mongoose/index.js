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

    var newDish = Dishes({
    	//In here we can specify a  document
    	name: 'Uthappizza',
    	description: 'test'
    });

    newDish.save()
    	.then((dish) => {
    		console.log(dish);

    		//exec() will ensure that this is executed
    		return Dishes.find({}).exec();
    	})
    	.then((dishes) => {
    		console.log(dishes);

    		return mongoose.connection.db.collection('dishes').drop();
    	})
    	.then(() => {
    		return db.close();
    	})
    	.catch((err) => {
    		console.log(err);
    	});
});
