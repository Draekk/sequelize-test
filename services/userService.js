const User = require("../models/user");
const repository = require("../repositories/userRepository");
const utils = require("../utils/utils");

async function createUser({ username, password }) {
  try {
    const user = User.build({
      username,
      password,
    });
    const res = await repository.save(user.dataValues);
    const data = utils.getUserFromPromise(res);
    return JSON.stringify(data);
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
    return JSON.stringify(data);
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function getUserById({ id }) {
  try {
    const res = await repository.findById(id);
    return res.length === 1
      ? JSON.stringify(utils.getUserFromPromise(res[0]))
      : null;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function getUserByUsername({ username }) {
  try {
    const res = await repository.findByUsername(username);
    return res.length > 0
      ? JSON.stringify(res.map((e) => utils.getUserFromPromise(e)))
      : null;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function editUser({ id, username, password }) {
  try {
    const user = User.build({
      id: parseInt(id),
      username,
      password,
    });
    console.log(user.dataValues);
    const res = await repository.update(user.dataValues);
    return res[0] === 1 ? JSON.stringify(user.dataValues) : null;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function deleteUser({ id }) {
  try {
    const res = await repository.destroy(parseInt(id));
    return res === 1 ? JSON.stringify({ msg: "User deleted" }) : null;
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
};
