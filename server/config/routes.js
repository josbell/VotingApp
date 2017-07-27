var Fruits = require('../controllers/fruits.js');
var Users = require('../controllers/users.js');
module.exports = function(app){
	const path = require("path");
	app.get('/fruit', function(req,res){
		Fruits.index(req,res);
	}),

	app.post('/user', function(req,res){
		Users.login(req,res);
	})

	app.post('/fruit', function(req,res){
		Fruits.create(req,res);
	})

	app.put('/fruit', function(req, res){
		Fruits.update(req,res);
	})

	app.get('*', function (req, res) {
    	res.sendFile(path.resolve('../client/dist/index.html'));
	});
}