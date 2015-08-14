angular.module('app')
.controller('NavbarAccountController', ['$scope', '$state', 'appIdentity', 'appAuth', 'appNotifier', function($scope, $state, appIdentity, appAuth, appNotifier){
	$scope.userData = {
		identity: appIdentity
	}

	$scope.signout = function () {
		appAuth.logoutUser().then(function() {
			$scope.userData = null;
			appNotifier.notify('You have successfully logged out.');
			$state.go('login');
		});
	};
}]);
