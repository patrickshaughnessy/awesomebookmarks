"use strict";

var myApp = angular.module("myApp");

myApp.service("LinkService",[ "$http", function($http){
	this.links = [];

	this.addLink = function(link){
		$http.post("/api/add", link).then(function(res) {
			this.links.push(res);
			console.log(res)
			console.log(this.links)
		});
	};


}]);

