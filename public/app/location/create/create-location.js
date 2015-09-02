angular.module('app.location.create',
	['app.location',])
.config(function($stateProvider){
	$stateProvider
		.state('location.create',{
			url: '/create',
			views: {
				'ui-view': {
					templateUrl: '/partials/location/create/create-location',
					controller: 'CreateLocationController',
				}
			},
			resolve: {
			}
		});
})
.controller('CreateLocationController', ['$scope', function($scope){
	console.log('create location js loaded')
}]);
