//models

const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
  token: String,
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
