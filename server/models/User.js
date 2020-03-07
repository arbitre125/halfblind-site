const Sequelize = require("sequelize");
const db = require("../config/db");

module.exports = db.sequelize.define(
  "user",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    date_created: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);
