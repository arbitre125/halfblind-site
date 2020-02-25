const Sequelize = require("sequelize");
const db = {};

const sequelize = new Sequelize("halfblind", "root", "", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000, // Maximum time to get connection (ms)
    idle: 10000 // Connection can be idle for (ms)
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
