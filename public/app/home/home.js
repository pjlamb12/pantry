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
.controller('HomeController', ['$scope', 'appIdentity', 'appAuth', function($scope, appIdentity, appAuth){
	$scope.hello = "Hello!";
	$scope.identity = appIdentity;

	$scope.signin = function(username, password) {
		appAuth.authenticateUser(username, password).then(function(success) {
			if( success ) {
				console.log( 'I logged in' );
			} else {
				console.log( 'I am not logged in yet' );
			}
		});
	};

	$scope.signout = function() {
		appAuth.logoutUser() {
			$scope.username = "";
			$scope.password = "";
			console.log('You have successfully logged out');
			// $location.path('/');
		}
	};

	console.log("Home");
}]);
