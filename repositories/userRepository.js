const User = require("../models/user");

async function save(user) {
  try {
    return await User.create({
      username: user.username,
      password: user.password,
    });
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function findAll() {
  try {
    return await User.findAll();
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function findById(id) {
  try {
    return await User.findAll({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function update(user) {
  try {
    return await User.update(
      {
        username: user.username,
        password: user.password,
      },
      {
        where: {
          id: user.id,
        },
      }
    );
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function destroy(id) {
  try {
    return await User.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

module.exports = { save, findAll, findById, update, destroy };
