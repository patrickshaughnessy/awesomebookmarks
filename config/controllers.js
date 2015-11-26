"use strict";

var myApp = angular.module("myApp");

myApp.controller("mainCtrl", ["$state", "LinkService", "$scope", function($state, LinkService, $scope){
	$scope.title = "Check out all your links below:"

	LinkService.populateData()

	$scope.$watchCollection(function(){
		return LinkService.links;
	}, function(links){
		$scope.links = LinkService.links;
		console.log($scope.links);
	})

	// $scope.links = LinkService.links;

	$scope.customOrderFunction = function(link){
		var date = Date.now();
		return date - link;
	}

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

// myApp.controller("tagsCtrl", ["$state", "LinkService", "$scope", function($state, LinkService, $scope){
// 	$scope.title = "TAGS"
//
// 	LinkService.populateData()
// 	$scope.tagslist;
//
// 	$scope.$watchCollection(function(){
// 		return LinkService.links;
// 	}, function(links){
// 		$scope.links = LinkService.links;
// 		$scope.tagsList = LinkService.getTags();
// 		console.log('tagslist', $scope.tagsList)
// 	})
//
//
// 	$scope.goToTag = function(tagName){
// 		$state.go('tag', {tagname: tagName});
// 	}
//
// 	$scope.length = function(link){
// 		if (link[0]){
// 			return link.length
// 		} else {
// 			return '0'
// 		}
// 	}
//
// 	$scope.showTrash = function(link){
// 		if ($scope.length(link) === '0'){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
//
//
// 	$scope.updateTag = function(link) {
// 		console.log($scope.tagsList, link);
//
// 		// LinkService.updateTag(data, link);
// 		// return $http.post('/updateUser', {id: $scope.user.id, name: data});
// 	};
//
// }]);

myApp.controller("tagsCtrl2", ["$state", "LinkService", "$scope", function($state, LinkService, $scope){
	$scope.title = "TAGS"

	LinkService.populateTags();

	$scope.$watchCollection(function(){
		return LinkService.tags;
	}, function(tags){
		$scope.tags = LinkService.tags;
		console.log($scope.tags);
	})

	// 
	// $scope.links = LinkService.links;
	//
	// $scope.length = function(link){
	// 	if (link[0]){
	// 		return link.length
	// 	} else {
	// 		return '0'
	// 	}
	// }
	//
	// $scope.showTrash = function(link){
	// 	if ($scope.length(link) === '0'){
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	$scope.updateTag = function(data, tag){
		LinkService.updateTag(data, tag);
	}

	$scope.goToTag = function(tagName){
		console.log(tagName);
		$state.go('tag', {tagname: tagName});
	}

}]);
