"use strict";

var myApp = angular.module("myApp");

myApp.service("LinkService",[ "$http", function($http){
	this.links = [];

	this.addLink = function(link){
		this.links.push(link);
		$http.post("http://localhost:3005/api/add", link).then(function(res) {
			console.log(res);
		});
	};

	this.tagLinks = function(tagName){
		console.log(this.links)
		return this.links.filter(function(link){
			return link.tag.some(function(tag){
				if(tag === tagName){
					return link;
				}
			})
		})
	}


}]);

