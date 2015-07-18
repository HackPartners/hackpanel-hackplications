
if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize'),
        sequelize = null;

  sequelize = new Sequelize(
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     process.env.DATABASE_PORT,
      host:     process.env.DATABASE_HOST,
      logging:  true 
    }
  );

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    hackplication:      sequelize.import(__dirname + '/hackplication') 
    // add your other models here
  };

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
}

module.exports = global.db;