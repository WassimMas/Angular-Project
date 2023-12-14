// Import mongoose

const mongoose = require("mongoose");

// create player schema

const playerSchema = mongoose.Schema({
  name: String,
  position: String,
  age: Number,
  number: Number,
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});

// create Player Model

const player = mongoose.model("Player", playerSchema);

// export player

module.exports = player;
