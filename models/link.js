"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema
var Link;
var linkSchema = Schema({
	link : String,
	tags : Array
});
Link = mongoose.model("Link", linkSchema)