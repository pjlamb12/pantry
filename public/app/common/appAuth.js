angular.module('app.appAuth').factory('appAuth', function($http, appIdentity, $q, appUser) {
	return {
		authenticateUser: function(username, password) {
			var dfd = $q.defer();
			$http.post('/login', {username: username, password: password}).then(function(res){
				if(res.data.success) {
					var user = new appUser();
					angular.extend(user, res.data.user);
					appIdentity.currentUser = user;
					dfd.resolve(true);
				} else {
					dfd.resolve(false);
				}
			});
			return dfd.promise;
		},
		createUser: function(newUserData) {
			var newUser = new appUser(newUserData);
			var dfd = $q.defer();

			newUser.$save().then(function() {
				appIdentity.currentUser = newUser;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			});

			return dfd.promise;
		},
		updateCurrentUser: function(newUserData) {
			var dfd = $q.defer();

			var clone = angular.copy(appIdentity.currentUser);
			angular.extend(clone, newUserData);
			clone.$update().then(function() {
				appIdentity.currentUser = clone;
				dfd.resolve();
			}, function(response) {
				dfd.reject(response.data.reason);
			});

			return dfd.promise;
		},
		logoutUser: function () {
			var dfd = $q.defer();
			$http.post('/logout', {logout: true}).then(function(){
				appIdentity.currentUser = undefined;
				dfd.resolve();
			});
			return dfd.promise;
		},
		authorizeCurrentUserForRoute: function(role) {
			if(appIdentity.isAuthorized(role)) {
				return true;
			} else {
				return $q.reject('not authorized');
			}
		},
		authorizeAuthenticatedUserForRoute: function() {
			if( appIdentity.isAuthenticated() ) {
				return true;
			} else {
				return $q.reject('not authorized');
			}
		}
	}
})
