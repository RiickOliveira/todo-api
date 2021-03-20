const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOSTNAME,
      port: process.env.DB_PORT,
      dialect: 'postgres',     
      logging: false,
      isolationLevel: Sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED
    })


module.exports = {
  connection,
  Sequelize
};
