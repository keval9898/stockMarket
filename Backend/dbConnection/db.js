const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Stock Market', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true // Optional: Disable SQL logging in console
});

module.exports = sequelize;
