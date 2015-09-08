var StorageLocation = require('mongoose').model('StorageLocation');

exports.getStorageLocations = function(req, res) {
	StorageLocation.find({}).exec(function(err, collection) {
		res.send(collection);
	});
};

exports.getStorageLocationsById = function(req, res) {
	StorageLocation.findOne({id:req.params.id}).exec(function(err, storageLocation) {
		res.send(storageLocation);
	});
};

exports.createStorageLocation = function( req, res ) {
	var locationData = req.body;
	locationData.owner = req.user._id;

	StorageLocation.create(locationData, function(err, location) {
		if( err ) {
			res.status(400);
			console.log(err);
			return res.send({ reason: err.toString() });
		}
		res.send(location);
	});
}