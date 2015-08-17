angular.module('app.appStorageLocations', []).factory('appStorageLocations', function($resource){
	var StorageLocationResource = $resource('/api/storage-locations/:id', {_id: "@id"}, {
		update: {method: 'PUT'}
	});

	return StorageLocationResource;
})
