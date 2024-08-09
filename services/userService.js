const User = require("../models/user");
const repository = require("../repositories/userRepository");
const utils = require("../utils/utils");
const pm = require("../utils/passManagerUtil");

async function createUser({ username, password }) {
  try {
    const user = User.build({
      username,
      password: pm.encryptPassword(password),
    });
    const res = await repository.save(user.dataValues);
    const data = utils.getUserFromPromise(res);
    return data;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function getUsers() {
  try {
    const res = await repository.findAll();
    const data = res.map((e) => {
      return utils.getUserFromPromise(e);
    });
    return data;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function getUserById({ id }) {
  try {
    const res = await repository.findById(id);
    return res.length === 1 ? utils.getUserFromPromise(res[0]) : null;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function getUserByUsername({ username }) {
  try {
    const res = await repository.findByUsername(username);
    return res.length > 0
      ? res.map((e) => utils.getUserFromPromise(e))[0]
      : null;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function editUser({ id, username, password }) {
  try {
    const user = User.build({
      id,
      username,
      password,
    });
    console.log(user.dataValues);
    const res = await repository.update(user.dataValues);
    return res[0] === 1 ? user.dataValues : null;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function deleteUser({ id }) {
  try {
    const res = await repository.destroy(parseInt(id));
    return res === 1 ? true : false;
  } catch (error) {
    console.error("An error has occurred:", error);
    return false;
  }
}

async function loginUser({ username, password }) {
  try {
    const user = await getUserByUsername({ username });
    if (user && pm.comparePassword(password, user.password)) {
      return user.id;
    }
    throw new Error("Invalid user");
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  getUserByUsername,
  editUser,
  deleteUser,
  loginUser,
};
