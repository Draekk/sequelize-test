require("dotenv").config();
const { env } = require("process");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established...");
  })
  .catch((err) => {
    console.error("Connection failed.", err);
  });

module.exports = sequelize;
