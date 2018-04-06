const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
},{
	timestamps: true
});

const disheSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	comments: [commentSchema]
	//The comments document becomes a sub document inside dish document
},{
	timestamps: true  
	//This will automatically add created at and updated at timestamps
});

var Dishes = mongoose.model('Dish', disheSchema);

module.exports = Dishes;
