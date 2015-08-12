var path = require('path');

var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development: {
		rootPath: rootPath,
		db: 'mongodb://127.0.0.1/pantry',
		port: process.env.PORT || 3030
	},
	production: {
		rootPath: rootPath,
		db: 'mongodb://localhost/pantry',
		port: process.env.PORT || 80
	}
}
