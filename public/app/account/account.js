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
.controller('AccountController', ['$scope', 'appAuth', 'appIdentity', 'appNotifier', function($scope, appAuth, appIdentity, appNotifier){
	$scope.userData = appIdentity.currentUser;

	$scope.update = function () {
		appAuth.updateCurrentUser($scope.userData).then(function() {
			appNotifier.notify('You successfully updated your account!');
		}, function(reason) {
			appNotifier.error(reason);
		});
	};

}]);
