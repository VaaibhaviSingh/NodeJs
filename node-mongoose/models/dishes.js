const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const disheSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	}
},{
	timestamps: true  
	//This will automatically add created at and updated at timestamps
});

var Dishes = mongoose.model('Dish', disheSchema);

module.exports = Dishes;
