const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

function encryptPassword(password) {
  return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { encryptPassword, comparePassword };
