"use strict";

var myApp = angular.module("myApp");

myApp.controller("mainCtrl", ["LinkService","$scope", function(LinkService, $scope){
	$scope.title = "MAIN HTMLE PAGE !!!"
	$scope.links = LinkService.links
	console.log($scope.links)

}]);

myApp.controller("newlinkCtrl", ["LinkService","$scope", function(LinkService, $scope){
	$scope.title = "NEW LINK"
	$scope.newLink = {tags: []};
	$scope.addTag = function(){
		$scope.newLink.tags.push("");
	}
	$scope.submitForm = function(){
		console.log($scope.newLink);
		LinkService.addLink($scope.newLink)
		$scope.newLink = {tags: []};
	}

}]);

myApp.controller("tagCtrl", ["LinkService", "$scope", function(LinkService, $scope){
	$scope.title = "TAG"
	

}]);

myApp.controller("tagsCtrl", ["LinkService", "$scope", function(LinkService, $scope){
	$scope.title = "TAGS"

}]);