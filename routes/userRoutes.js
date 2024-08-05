const express = require("express");
const fs = require("fs");
const router = express.Router();
const service = require("../services/userService");
const controller = require("../controllers/userController");

router.use(function timelog(req, res, next) {
  fs.appendFileSync("timelog.md", "> " + new Date().toString() + "\n");
  next();
});

router.get("/find/all", controller.getUsers);

router.get("/find/id/:id", controller.getUserById);

router.get("/find/username/:username", async (req, res) => {
  res.send(await service.getUserByUsername({ username: req.params.username }));
});

router.post("/create", async (req, res) => {
  const user = req.body;
  return res.send(
    await service.createUser({
      username: user.username,
      password: user.password,
    })
  );
});

router.put("/edit", async (req, res) => {
  const user = req.body;
  return res.send(
    await service.editUser({
      id: user.id,
      username: user.username,
      password: user.password,
    })
  );
});

router.delete("/delete/id/:id", async (req, res) => {
  return res.send(await service.deleteUser({ id: req.params.id }));
});

module.exports = router;
