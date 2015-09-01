angular.module('app.location',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('location',{
			url: '/locations/:locationId',
			templateUrl: '/partials/location/location',
			controller: 'LocationController',
			resolve: {
				location: function(appStorageLocations, $stateParams) {
					return appStorageLocations.get($stateParams.locationId).$promise;
				}
			}
		});
})
.controller('LocationController', ['$scope', 'location', function($scope, location){
	$scope.location = location[0];

	console.log($scope.location[0]);
}]);
