var auth = require('./auth'),
	users = require('../controllers/users.js'),
	storageLocations = require('../controllers/storageLocations.js');

module.exports = function(app) {

	app.get('/partials/*', function(req, res) {
		res.render('../../public/app/' + req.params[0]);
	});

	app.post('/api/users', users.createUser);
	app.put('/api/users', users.updateUser);

	app.post('/api/storage-locations', storageLocations.createStorageLocation);
	// app.put('/api/storage-locations', storageLocations.updateLocation);
	app.get('/api/storage-locations', storageLocations.getStorageLocations);
	// app.get('/api/storage-locations/:id', storageLocations.getStorageLocationsById);

	app.post('/login', auth.authenticate);
	app.post('/logout', function(req, res) {
		req.logout();
		res.end();
	});

	app.get('*', function(req, res) {
		console.log(req.user);
		if( req.user ){
			req.user.salt = null;
			req.user.hashed_pwd = null;
		}
		res.render('index', {
			bootstrappedUser: req.user
		});
	});

}
