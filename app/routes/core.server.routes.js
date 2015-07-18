'use strict';

var path = require('path');

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/hackplications.js')
        .get(function(req, res) {
            res.sendFile(path.join(__dirname, '../../public/dist', 'application.min.js'));
        });
};
