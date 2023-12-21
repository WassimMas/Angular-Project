// import mongoose module
const mongoose = require("mongoose");

// creation of schema

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  pwd: String,
  role: String,
  avatar: String,
});

// creation User Model

const user = mongoose.model("User", userSchema);

// export model

module.exports = user;
