angular.module('app').value('appToastr', toastr);

angular.module('app.appNotifier', []).factory('appNotifier', function(appToastr) {
	return {
		notify: function(msg) {
			appToastr.success(msg);
		},
		error: function(msg) {
			appToastr.error(msg);
		}
	}
});