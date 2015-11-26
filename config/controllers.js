"use strict";

var myApp = angular.module("myApp");

myApp.controller("mainCtrl", ["$state", "links", "LinkService", "$scope", function($state, links, LinkService, $scope){
	$scope.title = "Check out all your links below:"
	LinkService.links = links;
	$scope.links = LinkService.links;

	$scope.goToTag = function(tagName){
		$state.go('tag', {tagname: tagName});
	}

}]);

myApp.controller("newlinkCtrl", ["LinkService", "$scope", function(LinkService, $scope){
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

myApp.controller("tagCtrl", ["LinkService", "$scope", "$stateParams", function(LinkService, $scope, $stateParams){
	$scope.title = "TAG"

	$scope.tagName = $stateParams.tagname;
	$scope.links = LinkService.tagLinks($stateParams.tagname);

}]);

myApp.controller("tagsCtrl", ["$state", "LinkService", "$scope", function($state, LinkService, $scope){
	$scope.title = "TAGS"

	$scope.tagsList = LinkService.getTags();

	$scope.goToTag = function(tagName){
		$state.go('tag', {tagname: tagName});
	}

}]);
