'use strict';

var app = angular.module('app', [
	'ui.router',
	'ngResource',
	'app.home',
	'app.account',
	'app.login',
	'app.view1',
	'app.view2',
	'app.nested',
	'app.nested.nested1',
	'app.appAuth',
	'app.appIdentity',
	'app.appUser',
	'app.appNotifier'
]);

app.run(['$rootScope', '$state', '$stateParams', 'appIdentity', function($rootScope, $state, $stateParams, appIdentity) {
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.$on('$stateChangeStart', function(ev, to, toParams, from, fromParams) {
		if( appIdentity.currentUser != null ) {
			if(to.url === '/login') {
				ev.preventDefault();
				$state.go('home')
			}
		} else {
			if( to.url !== '/login') {
				ev.preventDefault();
				$state.go('login');
			}
		}
	});
}]);

app.config(function($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
});

