const jwt = require("jsonwebtoken");
require("dotenv").config();

function userPropertyValidation(req, res, next) {
  try {
    const props = Object.keys(req.body);

    switch (props.length) {
      case 1:
        if (props[0] === "id") {
          if (typeof props[0] === "string") {
            req.body.id = parseInt(req.body.id);
            break;
          }
        } else {
          return res.status(400).json({
            success: false,
            message: "Invalid property name. It has to be 'id'.",
          });
        }
      case 2:
        if (props[0] !== "username" || props[1] !== "password") {
          return res.status(400).json({
            success: false,
            message:
              "Invalid property name. They have to be 'username' and 'password'.",
          });
        }
        break;
      case 3:
        if (
          props[0] === "id" &&
          props[1] === "username" &&
          props[2] === "password"
        ) {
          if (typeof props[0] === "string") {
            req.body.id = parseInt(req.body.id);
            break;
          }
        } else {
          return res.status(400).json({
            success: false,
            message:
              "Invalid property name. The have to be 'id', 'username' and 'password'.",
          });
        }
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

function authenticate(req, res, next) {
  try {
    const token = req.cookies.token;
    jwt.verify(token, process.env.JWT_PASSWORD, (err, decoded) => {
      if (err) return res.status(401).json({ message: "Invalid token..." });
      req.user = decoded;
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: error.message,
    });
  }
}

module.exports = { userPropertyValidation, authenticate };
