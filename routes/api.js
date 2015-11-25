"use strict";

var express = require("express")
var router = express.router
var Link = require("../models/link")
router.post("/add", function(req, res){
	Link.create(req.body, function(err, newLink){
		if (err) return res.status(400).send(err)
		res.send(newLink)

	});
});

