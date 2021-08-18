const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserModel = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("user", UserModel);
