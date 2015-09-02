angular.module('app.location',
	['app', 'app.location.create'])
.config(function($stateProvider){
	$stateProvider
		.state('location',{
			url: '/locations',
			abstract: true,
			templateUrl: '/partials/location/location'
		});
});
