const express = require("express");
const path = require("path");
const app = express();
const sequelize = require("./config/database");
const User = require("./models/user");
const service = require("./services/userService");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/users/username", async (req, res) => {
  const username = req.body.username;
  res.status(200).send(await service.getUserByUsername({ username }));
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000...");
});

User.sync({ alter: true })
  .then((table) => {
    console.log(`Table ${table} created successfully`);
  })
  .catch((err) => console.error(err));
