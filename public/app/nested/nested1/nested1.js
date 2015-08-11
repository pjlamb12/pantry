angular.module('app.nested.nested1',
	[
		'app.nested'
	])
.config(function($stateProvider){
	$stateProvider
		.state('nested.nested1',{
			url: '/nested1',
			templateUrl: '/partials/nested/nested1/nested1',
			controller: 'Nested1Controller'
		});
})
.controller('Nested1Controller', function($scope){
	$scope.hello = "hello";
});
