const UserModel = require("../../schema/UserSchema");

const postUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await UserModel.create({
    name,
    email,
  });
  res.send(user);
};

module.exports = {
  postUsers,
};
