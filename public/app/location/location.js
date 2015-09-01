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
					console.log($stateParams);
					return appStorageLocations.query($stateParams.locationId);
				}
			}
		});
})
.controller('LocationController', ['$scope', 'location', function($scope, location){
	$scope.location = location;

	console.log(location);
}]);
