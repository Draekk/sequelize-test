const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("db_sequelize_test", "custom_user", "1234", {
  host: "localhost",
  dialect: "mysql",
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
