'use strict';

var callback1 = { "response": "hello" },
	callback2 = { "response": "world" },
	err = { "err": "Error" };
	
exports.fooCheckGet = function(req, res){
	if (req.body){
		res.send(callback1);
	}
};

exports.fooCallback = function(req,res){
	if (!req.body)
		res.send(callback1);
};

exports.barCheckGet = function(req, res){
	if (req.body){
		res.send(callback2);
	}
};

exports.barCallback = function(req, res){
	if (!req.body)
		res.send(callback2);
};