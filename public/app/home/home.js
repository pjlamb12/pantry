angular.module('app.home',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: '/partials/home/home',
			controller: 'HomeController'
		});
})
.controller('HomeController', function($scope){
	$scope.hello = "Hello!";

	console.log("Home");
});
