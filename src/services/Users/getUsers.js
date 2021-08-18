const UserModel = require("../../schema/UserSchema");

const getUsers = async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
};

module.exports = {
  getUsers,
};
