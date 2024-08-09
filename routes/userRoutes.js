const express = require("express");
const fs = require("fs");
const router = express.Router();
const controller = require("../controllers/userController");
const {
  userPropertyValidation,
} = require("../middlewares/validationMiddleware");

router.use(function timelog(req, res, next) {
  fs.appendFileSync(
    "timelog.md",
    `> Method: ${req.method}, URL: ${req.url}, Time: ${
      new Date().toString().split(" (")[0]
    }` + "\n"
  );
  next();
});

router.get("/find/all", controller.getUsers);

router.get("/find/id/:id", controller.getUserById);

router.get("/find/username/:username", controller.getUsersByUsername);

router.post("/create", userPropertyValidation, controller.createUser);

router.post("/login", userPropertyValidation, controller.loginUser);

router.put("/edit", userPropertyValidation, controller.editUser);

router.delete("/delete/id/:id", controller.deleteUser);

router.get("/protected", authenticate, controller.authenticateUser);

module.exports = router;
