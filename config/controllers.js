"use strict";

var myApp = angular.module("myApp");

myApp.controller("mainCtrl", ["$scope", function($scope){
	$scope.title = "MAIN HTMLE PAGE !!!"

}]);

myApp.controller("newlinkCtrl", ["LinkService","$scope", function(LinkService, $scope){
	$scope.title = "NEW LINK"
	$scope.newLink = {tags: []};
	$scope.addTag = function(){
		$scope.newLink.tags.push("");
	}
	$scope.submitForm = function(){
			console.log($scope.newLink);
		//LinkService.addLink
	}

}]);

myApp.controller("tagCtrl", ["$scope", function($scope){
	$scope.title = "TAG"

}]);

myApp.controller("tagsCtrl", ["$scope", function($scope){
	$scope.title = "TAGS"

}]);