"use strict";
var myApp = angular.module("myApp", ["ui.router", 'xeditable']);

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
			url: "/tag/:tagname",
			templateUrl: "partials/tag.html",
			controller: "tagCtrl"
		})
		.state("tags", {
			url: "/tags",
			templateUrl: "partials/tags.html",
			controller: "tagsCtrl"
		})
		.state("tags.links", {
			url: "/:tagname",
			templateUrl: "partials/tags.links.html",
			controller: "tagCtrl"
		})
}]);

myApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
