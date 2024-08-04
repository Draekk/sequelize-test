const repository = require("../repositories/userRepository");

async function createUser(json) {
  try {
    const res = await repository.save(JSON.parse(json));
    const data = {
      id: res.id,
      username: res.username,
      password: res.password,
    };
    return JSON.stringify(data);
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

module.exports = { createUser };
