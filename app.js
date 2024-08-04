const express = require("express");
const path = require("path");
const app = express();
const sequelize = require("./config/database");
const User = require("./models/user");
const service = require("./services/userService");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.status(200).send(await service.getUserById({ id }));
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000...");
});

User.sync({ alter: true })
  .then((table) => {
    console.log(`Table ${table} created successfully`);
  })
  .catch((err) => console.error(err));
