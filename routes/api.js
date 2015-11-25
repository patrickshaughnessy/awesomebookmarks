"use strict";

var express = require("express")
var router = express.Router();

var Link = require("../models/link")

router.get('/', function(req, res){
	Link.find({}, 'link tags timestamp', function(err, links){
		if (err) return res.status(400).send(err);
		console.log(links);
		res.send(links);
	})
})

router.post("/add", function(req, res){
	Link.create(req.body, function(err, newLink){
		if (err) return res.status(400).send(err)
		res.send(newLink)
	});
});



module.exports = router;
