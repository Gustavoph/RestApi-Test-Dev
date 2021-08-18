const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://gusta:${process.env.PASSWORD_API}@cursojs.vtjjl.mongodb.net/TestDev?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection.on("connected", () => {
  return true;
});

module.exports = {
  mongoose,
  connection,
};
