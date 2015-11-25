"use strict";

var myApp = angular.module("myApp");

myApp.service("LinkService", function(){
	var links = [];

	this.addLink = function(link, tag){
		var newLink = {}
		newLink.link = link;
		newLink.tags = tag;
	}

})