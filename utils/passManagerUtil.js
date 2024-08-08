const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

function encrypyPassword(password) {
  return bcrypt.hashSync(password, salt);
}

function comparePassword(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = { encrypyPassword, comparePassword };
