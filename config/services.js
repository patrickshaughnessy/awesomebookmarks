"use strict";

var myApp = angular.module("myApp");

myApp.service("LinkService", ["$http", function($http){

	this.addLink = function(link){
		this.links.push(link);
		$http.post("http://localhost:3005/api/add", link).then(function(res) {
			console.log(res.data);
		});
	};

	this.tagLinks = function(tagName){
		return (this.links).filter(function(link){
			return link.tags.some(function(tag){
				if(tag === tagName){
					return link;
				}
			})
		})
	}

	this.getTags = function(){
		var tagsList = {};
		(this.links).forEach(function(link){
			link.tags.forEach(function(tag){
				tagsList[tag] = tagsList[tag] ? tagsList[tag].concat(link.link) : [link.link]
			})
		})
		return tagsList;
	}


}]);
