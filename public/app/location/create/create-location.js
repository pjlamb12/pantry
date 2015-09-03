angular.module('app.location.create',
	['app.location',])
.config(function($stateProvider){
	$stateProvider
		.state('location.create',{
			url: '/create',
			views: {
				'locations': {
					templateUrl: '/partials/location/create/create-location',
					controller: 'CreateLocationController',
				}
			},
			resolve: {
			}
		});
})
.controller('CreateLocationController', ['$scope', function($scope){
	$scope.location = {
		name: '',
		contents: []
	};
	$scope.item = {
		name: '',
		quantity: 0,
		exp_date: '',
		notes: ''
	};
	$scope.items = [];

	$scope.datepicker = {
		format: 'MM-dd-yyyy',
		minDate: new Date(),
		closeText: "Close",
		showWeeks: false,
		yearRange: 50,
		opened: false
	}

	$scope.openDatepicker = function($event) {
		$scope.datepicker.opened = true;
	}

	$scope.addItem = function() {
		// items.push(item);
		// item = {
		// 	name: '',
		// 	quantity: 0,
		// 	exp_date: '',
		// 	notes: ''
		// };
	}
}]);
