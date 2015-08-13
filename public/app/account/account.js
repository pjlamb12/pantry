angular.module('app.account',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('account',{
			url: '/account',
			templateUrl: '/partials/account/account',
			controller: 'AccountController'
		});
})
.controller('AccountController', function($scope){
	$scope.hello = "Hello!";

	console.log("Home");
});
