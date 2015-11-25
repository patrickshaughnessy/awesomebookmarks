"use strict";
var myApp = angular.module("myApp", ["ui.router"]);

myApp.config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("main", {
			url: "/",
			templateUrl: "partials/main.html",
			controller: "mainCtrl"
		})
		.state("newlink", {
			url: "/newlink",
			templateUrl: "partials/newlink.html",
			controller: "newlinkCtrl"
		})
		.state("tag", {
			url: "/tag",
			templateUrl: "partials/tag.html",
			controller: "tagCtrl"
		})
		.state("tags", {
			url: "/tags",
			templateUrl: "partials/tags.html",
			controller: "tagsCtrl"
		})
}]);