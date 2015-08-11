angular.module('app.nested',
	[
		'app',
		'app.nested.nested1'
	])
.config(function($stateProvider){
	$stateProvider
		.state('nested',{
			abstract: true,
			url: '/nested',
			templateUrl: '/partials/nested/nested',
		});
});
