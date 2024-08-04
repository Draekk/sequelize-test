const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "users",
  }
);

User.sync()
  .then((table) => {
    console.log(`Table ${table} created successfully`);
  })
  .catch((err) => console.error(err));

module.exports = User;
