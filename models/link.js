"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema
var Link;

var linkSchema = Schema({
	link : String,
	tags : Array,
	timestamp: {type: Date, default: Date.now()}
});

Link = mongoose.model("Link", linkSchema)

module.exports = Link;
