var mongoose = require('mongoose');

var storageSchema = mongoose.Schema({
	name: {type: String, required: '{PATH} is required!'},
	contents: { type: Array, "default": []}
});

var Storage = mongoose.model('Storage', storageSchema);

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
	Storage.find({}).exec(function(err, collection){
		if( collection.length === 0) {
			Storage.create({name: 'Pantry', contents: contents});
		}
	});
};

exports.createDefaultStorageLocations = createDefaultStorageLocations;
