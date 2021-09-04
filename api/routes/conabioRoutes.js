'use strict';
module.exports = function (app) {
	var conabioController = require('../controllers/conabioController');

	app.route('/conabio/foo')
		.get(conabioController.fooCheckGet)
		.post(conabioController.fooCallback);

	app.route('/conabio/bar')
		.get(conabioController.barCheckGet)
		.post(conabioController.barCallback);
};