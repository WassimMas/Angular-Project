// Import mongoose

const mongoose = require("mongoose");

// create team schema

const teamSchema = mongoose.Schema({
  name: String,
  fondation: Number,
  staduim: String,
  owner: String,
});

// create team Model

const team = mongoose.model("team", teamSchema);

// export team

module.exports = team;
