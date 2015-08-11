angular.module('app.view2',
	['app',])
.config(function($stateProvider){
	$stateProvider
		.state('view2',{
			url: '/view2',
			templateUrl: '/partials/view2/view2',
			controller: 'View2Controller'
		});
})
.controller('View2Controller', function($scope){
	$scope.hello = "Hello!";

	console.log("View 2");
});
