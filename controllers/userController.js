const service = require("../services/userService");
const jwt = require("jsonwebtoken");

async function getUsers(req, res) {
  try {
    const data = await service.getUsers();
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Users found!",
        data,
      });
    }
    return res.status(404).json({
      success: false,
      message: "Users not found...",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function getUserById(req, res) {
  try {
    const id = req.params.id;
    const data = await service.getUserById({ id });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "User found!",
        data,
      });
    }
    return res.status(404).json({
      success: false,
      message: "User not found...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function getUsersByUsername(req, res) {
  try {
    const username = req.params.username;
    const data = await service.getUserByUsername({ username });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "Users found!",
        data,
      });
    }
    return res.status(404).json({
      success: false,
      message: "Users not found...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function createUser(req, res) {
  try {
    const user = req.body;
    const data = await service.createUser(user);
    if (data) {
      return res.status(202).json({
        success: true,
        message: "User created successfully!",
        data,
      });
    }
    return res.status(400).json({
      success: false,
      message: "User not created...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function editUser(req, res) {
  try {
    const user = req.body;
    const data = await service.editUser(user);
    if (data) {
      return res.status(202).json({
        success: true,
        message: "User updated successfully!",
        data,
      });
    }
    return res.status(404).json({
      success: false,
      message: "User not found...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const data = await service.deleteUser({ id });
    if (data) {
      return res.status(200).json({
        success: true,
        message: "User deleted successfully!",
      });
    }
    return res.status(404).json({
      success: false,
      message: "User not found...",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

async function loginUser(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const data = await service.loginUser({ username, password });
    if (typeof data === "number" && data > 0) {
      const token = jwt.sign({ userId: data } /*TODO:*/);
      return res.status(200).json({
        success: data,
        message: "Logged in!",
      });
    } else {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials...",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

function authenticateUser(req, res) {
  try {
    return res.status(200).json({
      success: true,
      message: "User validated!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = {
  getUsers,
  getUserById,
  getUsersByUsername,
  createUser,
  editUser,
  deleteUser,
  loginUser,
  authenticateUser,
};
