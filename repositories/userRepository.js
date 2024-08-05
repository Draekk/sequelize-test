const sequelize = require("../config/database");
const User = require("../models/user");
const { Op } = require("sequelize");

async function save(user) {
  try {
    return await User.create(user);
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

async function findByUsername(username) {
  try {
    return await User.findAll({
      where: {
        username: {
          [Op.substring]: username,
        },
      },
    });
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function update(user) {
  try {
    return await User.update(user, {
      where: {
        id: user.id,
      },
    });
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function destroy(id) {
  try {
    return await User.destroy({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

async function rawQuery(query) {
  try {
    return await sequelize.query(query);
  } catch (error) {
    console.error("An error has occurred:", error);
    return null;
  }
}

module.exports = {
  save,
  findAll,
  findById,
  update,
  destroy,
  findByUsername,
  rawQuery,
};
