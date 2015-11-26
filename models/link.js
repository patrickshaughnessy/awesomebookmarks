"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema
var Link;

var linkSchema = Schema({
	link : String,
	tags : Array
},
{ timestamps: { createdAt: 'created_at' } });

Link = mongoose.model("Link", linkSchema)

module.exports = Link;
