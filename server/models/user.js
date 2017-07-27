var mongoose = require('mongoose');
module.exports = function(){
	var userSchema = new mongoose.Schema({
		username:{
			type:String,
			required:true
		},
		fruits:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:'Fruit'
		}],
	},{timestamps:true});

	mongoose.model('User',userSchema);
}