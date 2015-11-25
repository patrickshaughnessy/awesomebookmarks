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


}]);

