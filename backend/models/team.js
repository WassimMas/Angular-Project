// Import mongoose

const mongoose = require("mongoose");

// create team schema

const teamSchema = mongoose.Schema({
  name: String,
  fondation: Number,

  owner: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  stadium: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stadium",
  },
});

// create team Model

const team = mongoose.model("team", teamSchema);

// export team

module.exports = team;
