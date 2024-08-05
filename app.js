const express = require("express");
const path = require("path");
const app = express();
const service = require("./services/userService");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/users/all", async (req, res) => {
  return res.send(await service.getUsers());
});

app.get("/users/username/:username", async (req, res) => {
  const username = req.params.username;
  res.status(200).send(await service.getUserByUsername({ username }));
});

app.post("/users/create", async (req, res) => {
  const user = req.body;
  return res.send(
    await service.createUser({
      username: user.username,
      password: user.password,
    })
  );
});

app.put("/users/edit", async (req, res) => {
  const user = req.body;
  return res.status(200).send(
    await service.editUser({
      id: user.id,
      username: user.username,
      password: user.password,
    })
  );
});

app.delete("/users/delete/:id", async (req, res) => {
  const id = req.params.id;
  return res.send(await service.deleteUser({ id: id }));
});

app.listen(3000, () => {
  console.log("Server listening on port: 3000...");
});
