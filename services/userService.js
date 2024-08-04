const repository = require("../repositories/userRepository");
const utils = require("../utils/utils");

async function createUser(json) {
  try {
    const res = await repository.save(JSON.parse(json));
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
    return res.length === 1 ? utils.getUserFromPromise(res[0]) : null;
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

module.exports = { createUser, getUsers, getUserById };
