var mongoose = require('mongoose');

var storageSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required!'},
	contents: [String]
});

var Storage = mongoose.model('Storage', storageSchema);

function createDefaultStorageLocations () {
	Storage.find({}).exec(function(err, collection){
		if( collection.length === 0) {
			Storage.create({name: 'Pantry', contents: []});
		}
	});
};

exports.createDefaultStorageLocations = createDefaultStorageLocations;
