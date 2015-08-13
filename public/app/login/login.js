angular.module('app.login',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('login',{
			url: '/login',
			templateUrl: '/partials/login/login',
			controller: 'LoginController'
		});
})
.controller('LoginController', ['$scope', '$state', 'appIdentity', 'appAuth', 'appNotifier', function($scope, $state, appIdentity, appAuth, appNotifier){
	$scope.userData = {
		username: '',
		password: '',
		identity: appIdentity
	};
	$scope.newUserData = {
		username: '',
		password: '',
		firstName: '',
		lastName: ''
	}

	$scope.signin = function(userData) {
		appAuth.authenticateUser(userData.username, userData.password).then(function(success) {
			if( success ) {
				appNotifier.notify('You successfully logged in!');
				$scope.userData.password = null;
				$state.go('home');
			} else {
				appNotifier.error('Something went wrong. Try again.');
			}
		});
	};

	$scope.signup = function() {
		appAuth.createUser($scope.newUserData).then(function() {
			console.log('new account created');
			$state.go('home');
		}, function(reason) {
			console.log(reason);
		});
	}

}]);
