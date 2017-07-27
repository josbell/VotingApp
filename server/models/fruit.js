var mongoose = require('mongoose');
module.exports = function(){
	var fruitSchema = new mongoose.Schema({
		name: String,
		totalVotes: {
			type:Number,
			default:0
		}
	},{timestamps:true});

	mongoose.model('Fruit',fruitSchema);
}

