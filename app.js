const express = require("express");
const app = express();
const sequelize = require("./config/database");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port: 3000...");
});
