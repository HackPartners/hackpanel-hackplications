module.exports = function(sequelize, DataTypes) {
	'use strict';

	return sequelize.define('Hackplication', {
		user_id: DataTypes.STRING
	});
};