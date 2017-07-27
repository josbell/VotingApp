var mongoose = require('mongoose');
var Fruit = mongoose.model('Fruit');

module.exports = {

	index:function(req,res){
		Fruit.find({})
			.sort({totalVotes:-1})
			.exec((err, docs)=>{
			if(err){
				let msg = 'Issue fetching fruit from DB';
				console.log(msg, err);
				res.json(msg);
			}else{
				let msg = 'Successfully fetched fruit from DB';
				console.log(msg);
				res.json(docs);
			}
		})
	},

	create:function(req,res){
		console.log(req.body);
		let newFruit = new Fruit(req.body);
		newFruit.save(err=>{
			if(err){
				let msg = 'Issue saving new fruit'
				console.log(msg, err);
				res.json(msg);
			}else{
				let msg = 'Saved new fruit sucessfully'
				console.log(msg);
				res.json(msg);
			};
		})
	},

	update:function(req,res){
		console.log(req.body);
		let query = {'_id':req.body._id};
		Fruit.update(query,{ $set: { totalVotes:req.body.totalVotes }},err=>{
			if(err){
				console.log(err);
				res.json(err);
			}else{
				console.log('Successfully updated fruit');
				res.json({success:true});
			}
		});
	}
}