angular.module('app.location.view',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('location.view',{
			url: '/locations/:locationId',
			abstract: true,
			templateUrl: '/partials/location/view/view-location',
			controller: 'ViewLocationController',
			resolve: {
				location: function(appStorageLocations, $stateParams) {
					return appStorageLocations.get($stateParams.locationId).$promise;
				}
			}
		});
})
.controller('ViewLocationController', ['$scope', 'location', function($scope, location){
	$scope.location = location[0];

	console.log($scope.location[0]);
}]);
