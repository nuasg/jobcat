// public/js/controllers/mainCtrl.js

var app = angular.module('mainController', []);

app.controller('mainController', function($scope, $http) {
	//console.log('Works');
	$scope.newJob = {};
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

	$scope.addJob = function() {
		console.log($scope.newJob.description);
		$http.post('/api/jobs', $scope.newJob)
			.success(function(data){
				console.log(data);
				//localStorage.attempt = true;
				//window.location.reload(true);
			})
			.error(function(data, status, headers, config){
				console.log(status);
			});

		$scope.newJob = {};
	};
});