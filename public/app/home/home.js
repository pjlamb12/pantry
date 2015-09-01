angular.module('app.home',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('home',{
			url: '/',
			templateUrl: '/partials/home/home',
			controller: 'HomeController',
			resolve: {
				locations: function(appStorageLocations) {
					return appStorageLocations.query();
				}
			}
		});
})
.controller('HomeController', ['$scope', 'locations', function($scope, locations){
	$scope.locations = locations;
}]);
