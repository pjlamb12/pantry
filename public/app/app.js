'use strict';

var app = angular.module('app', [
	'ui.router',
	'app.home',
	'app.view1',
	'app.view2',
	'app.nested',
	'app.nested.nested1',
	'app.appAuth',
	'app.appIdentity',
	'app.appUser'
]);

app.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
}]);

app.config(function($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
});
