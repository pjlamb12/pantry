var StorageLocation = require('mongoose').model('StorageLocation');

exports.getStorageLocations = function(req, res) {
	StorageLocation.find({}).exec(function(err, collection) {
		res.send(collection);
	});
};

exports.getStorageLocationsById = function(req, res) {
	StorageLocation.findOne({_id:req.params.id}).exec(function(err, storageLocation) {
		res.send(storageLocation);
	});
};
