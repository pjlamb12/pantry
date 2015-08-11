angular.module('app.view1',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('view1',{
			url: '/view1',
			templateUrl: '/partials/view1/view1',
			controller: 'View1Controller'
		});
})
.controller('View1Controller', function($scope){
	$scope.hello = "Hello!";

	console.log("View 1 ");
});
