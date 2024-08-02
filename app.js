const express = require("express");
const app = express();
const sequelize = require("./config/database");
const User = require("./models/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, () => {
  console.log("Server listening on port: 3000...");
});

User.sync({ alter: true })
  .then((table) => {
    console.log(`Table ${table} created successfully`);
  })
  .catch((err) => console.error(err));
