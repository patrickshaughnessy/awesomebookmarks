"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema
var Tag;

var tagSchema = Schema({
	tag : String,
	link : {type: Schema.Types.ObjectId, ref: "Link"}
},
{ timestamps: { createdAt: 'created_at' } });

Tag = mongoose.model("Tag", tagSchema)

module.exports = Tag;
