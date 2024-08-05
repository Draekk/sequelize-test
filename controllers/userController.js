const service = require("../services/userService");

async function getUsers(req, res) {
  try {
    const data = await service.getUsers();
    res.status(200).json({
      success: true,
      data,
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
        message: "User found",
        data,
      });
    }
    return res.status(404).json({
      success: false,
      message: "User not found",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = { getUsers, getUserById };
