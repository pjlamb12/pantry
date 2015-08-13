angular.module('app')
.controller('NavbarAccountController', ['$scope', 'appIdentity', function($scope, appIdentity){
	$scope.userData = {
		identity: appIdentity
	}
}]);
