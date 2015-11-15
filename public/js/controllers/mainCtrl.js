// public/js/controllers/mainCtrl.js

var app = angular.module('mainController', []);

app.controller('mainController', function($scope) {
	console.log('Works');

	$scope.jobs = [
	 {
	 	'title': 'Test',
	 	'days': 'Saturday',
	 	'hoursPerWeek': 5,
	 	'contact': '1-800-000-000',
	 	'description': 'description'
	 },
	 {
	 	'title': 'Test2',
	 	'days': 'Saturday',
	 	'hoursPerWeek': 5,
	 	'contact': '1-800-000-000',
	 	'description': 'description'
	 }
	];
});