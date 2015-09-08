var mongoose = require('mongoose');

var storageLocationSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required!'},
	owner: {type: String, required: '{PATH} is required!'},
	contents: { type: Array, "default": []}
});

var StorageLocation = mongoose.model('StorageLocation', storageLocationSchema);

function createDefaultStorageLocations () {
	var item = {
		"name": "Rice",
		"quantity": 5,
		"exp_date": "N/A",
		"notes": "Testing"
	};
	var contents = new Array();
	contents.push(item);
	contents.push(item);
	StorageLocation.find({}).exec(function(err, collection){
		if( collection.length === 0) {
			StorageLocation.create({name: 'Pantry', contents: contents});
		}
	});
};

