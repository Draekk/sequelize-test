const User = require("../models/user");

async function save(user) {
  try {
    return await User.create({
      username: user.username,
      password: user.password,
    });
  } catch (error) {
    console.log("An error has occurred:", error);
    return null;
  }
}

module.exports = { save };
