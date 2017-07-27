var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

	login:function(req,res){
		console.log(req.body);
		User.findOne(req.body,(err, user)=>{
			if(user){
				let msg = 'Successfully fetched user from DB';
				console.log(msg, user);
				let response = {success:true, data:user};
				res.json(response);
			}else if(err){
				let errors = ['Issue fetching user from DB'];
				let response = {success:false, data:errors};
				console.log(errors, err);
				res.json(response);
			}else{
				let errors = ['Incorrect Credentials'];
				let response = {success:false, data:errors};
				res.json(response);
			}
		})
	}
}