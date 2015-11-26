"use strict";

var myApp = angular.module("myApp");

myApp.service("LinkService", ["$http", function($http){

	this.links = [];
	this.tags = [];

	this.populateData = function(){
		if (!this.links.length){
			return $http.get('http://localhost:3005/api/').then(res => {
				this.links = res.data.sort(function(a, b){
					return b.timestamp - a.timestamp
				});
			});
		}
		return this.links;
	}

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
		console.log('getting tags')
		var tagsList = {};
		(this.links).forEach(function(link){
			link.tags.forEach(function(tag){
				tagsList[tag] = tagsList[tag] ? tagsList[tag].concat(link.link) : [link.link]
			})
		})
		console.log(tagsList);
		return tagsList;
	}

	this.updateTag = function(data, tag) {
		console.log(data, tag);
		tag.tag = data;
		$http.post('http://localhost:3005/api/tags', tag).then(res =>{
			// find tag in tags array and change;
			console.log('finished', res);
		})
	}

	this.populateTags = function(){
		if (!this.tags.length){
			return $http.get('http://localhost:3005/api/tags').then(res => {
				console.log(res);
				this.tags = res.data;
			})
		}
		return this.tags;
	}

}]);
