"use strict";

var express = require("express")
var router = express.Router();

var Link = require("../models/link");
var Tag = require('../models/tag')

router.get('/', function(req, res){
	Link.find({}, 'link tags timestamp', function(err, links){
		if (err) return res.status(400).send(err);
		console.log(links);
		res.send(links);
	})
})

router.post("/add", function(req, res){
	console.log(req.body);
	Link.create(req.body, function(err, newLink){
		if (err) return res.status(400).send(err)
		req.body.tags.forEach(function(tag){
			var newTag = {
				tag: tag,
				link: newLink
			}
			Tag.create(newTag, function(err, savedTag){
				console.log(savedTag);
			});
		})

		res.send(newLink)
	});
});

router.get('/tags', function(req, res){
	Tag.find({}, function(err, tags){
		res.send(tags);
	})
});

router.post('/tags', function(req, res){
	console.log(req.body);
	Tag.findByIdAndUpdate(req.body._id, {$set: {tag: req.body.tag}}, function(err, savedTag){
		console.log('saved');
		res.send(savedTag);
	})
})



module.exports = router;
