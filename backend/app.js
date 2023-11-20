// import express application

const express = require("express");

// import body-parser module

const bodyParser = require("body-parser");

// create express application

const app = express();

// configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Static Data
let matchesData = [
  { id: 1, teamOne: "EST", teamTwo: "CA", scoreOne: 1, scoreTwo: 1 },
  { id: 2, teamOne: "ESS", teamTwo: "CSS", scoreOne: 3, scoreTwo: 1 },
  { id: 3, teamOne: "FCB", teamTwo: "RMD", scoreOne: 2, scoreTwo: 1 },
  { id: 4, teamOne: "FCB", teamTwo: "RMD", scoreOne: 3, scoreTwo: 3 },
  { id: 5, teamOne: "FCB", teamTwo: "RMD", scoreOne: 5, scoreTwo: 3 },
];

let playersData = [
  { id: "1", name: "Salah", position: "at", age: "21", number: "17" },
  { id: "2", name: "Leo", position: "at", age: "25", number: "22" },
  { id: "3", name: "Mario", position: "d", age: "25", number: "12" },
  { id: "4", name: "Philip", position: "c", age: "28", number: "19" },
  { id: "5", name: "Karim", position: "d", age: "35", number: "31" },
  { id: "6", name: "Salim", position: "at", age: "22", number: "9" },
];

let teamData = [
  {
    id: "1",
    teamName: "EST",
    teamFondation: "1919",
    staduim: "Rades",
    teamOwner: "person1",
  },
  {
    id: "2",
    teamName: "OB",
    teamFondation: "1945",
    staduim: "Beja",
    teamOwner: "person2",
  },
  {
    id: "3",
    teamName: "ESS",
    teamFondation: "1920",
    staduim: "Sousse",
    teamOwner: "person3",
  },
  {
    id: "4",
    teamName: "RMD",
    teamFondation: "1900",
    staduim: "Madrid",
    teamOwner: "person4",
  },
  {
    id: "5",
    teamName: "PSG",
    teamFondation: "1910",
    staduim: "Paris",
    teamOwner: "person5",
  },
  {
    id: "6",
    teamName: "FCB",
    teamFondation: "1890",
    staduim: "Barcelone",
    teamOwner: "person6",
  },
];
// Business Logic : Get All Matches
app.get("/matches", (req, res) => {
  console.log("Here into BL : Get All Matches");
  res.json({ matches: matchesData });
});

// Business Logic : Get Match By ID
app.get("/matches/:id", (req, res) => {
  console.log("Here into BL : Get Match By ID");
  let matchId = req.params.id;
  // for (let i = 0; i < matchesData.length; i++) {
  //   if (matchesData[i].id == matchId) {
  //     res.json({ match: matchesData[i] });
  //   }
  // }

  let findedMatch = matchesData.find((obj) => {
    return obj.id == matchId;
  });
  res.json({ match: findedMatch });
});

// Business Logic : Add Match
app.post("/matches", (req, res) => {
  console.log("Here into BL : Add Match ");
  let obj = req.body;
  console.log("here object from FE", obj);
  matchesData.push(obj);
  res.json({ msg: "object added with success" });
});
// Business Logic : Delete Match

app.delete("/matches/:id", (req, res) => {
  console.log("Here into BL : Delete Match ");
  let matchId = req.params.id;
  for (let i = 0; i < matchesData.length; i++) {
    if (matchesData[i].id == matchId) {
      matchesData.splice(i, 1);
      beak;
    }
  }
  res.json({ msg: "deleted with success" });
});
// Business Logic : Edit Match

app.put("/matches", (req, res) => {
  console.log("Here into BL : Edit Match ");
  let obj = req.body;
  console.log("here object from FE", obj);
  for (let i = 0; i < matchesData.length; i++) {
    if (matchesData[i].id == obj.id) {
      matchesData[i] = obj;
      break;
    }
  }
  res.json({ editedMatch: true });
});

// Business Logic : Get All Teams

app.get("/teams", (req, res) => {
  console.log("Here into BL : Get All Teams");
  res.json({ teams: teamData });
});

// Business Logic : Get Team By ID

app.get("/teams/:id", (req, res) => {
  console.log("Here into BL : Get Team By ID");
  let teamId = req.params.id;
  let findedTeam = teamData.find((obj) => {
    return obj.id == teamId;
  });
  res.json({ team: findedTeam });
});
// Business Logic : Delete Team By ID
app.delete("/teams/:id", (req, res) => {
  console.log("Here into BL : Delete Team By ID");
  let teamId = req.params.id;
  for (let i = 0; i < teamData.length; i++) {
    if (teamData[i].id == teamId) {
      teamData.splice(i, 1);
      break;
    }
  }
  res.json({ msg: "deleted with success" });
});

// Business Logic : Add Team
app.post("/teams", (req, res) => {
  console.log("Here into BL : Add Team");
  let obj = req.body;
  console.log("Here object from FE");
  teamData.push(obj);
  res.json({ msg: "Added with success" });
});

// Business Logic : Edit Team
app.put("/teams", (req, res) => {
  console.log("Here into BL : edit Team");
  let obj = req.body;
  console.log("here object from FE", obj);
  for (let i = 0; i < teamData.length; i++) {
    if (teamData[i].id == obj.id) {
      teamData[i] = obj;
    }
  }
  res.json({ msg: "Edited with success" });
});

// Business Logic : Get All Players
app.get("/players", (req, res) => {
  console.log("Here into BL : Get All Players");
  res.json({ players: playersData });
});

// Business Logic : Get Player By ID

app.get("/players/:id", (req, res) => {
  console.log("Here into BL : Get Player By ID");
  let playerId = req.params.id;
  let findedPlayer = playersData.find((obj) => {
    return obj.id == playerId;
  });
  res.json({ player: findedPlayer });
});

// Business Logic : Delete Player By ID

app.delete("/players/:id", (req, res) => {
  console.log("Here into BL : Delete Player By ID");
  let playerId = req.params.id;
  for (let i = 0; i < playersData.length; i++) {
    if (playersData[i].id == playerId) {
      playersData.splice(i, 1);
    }
  }
  res.json({ msg: "deleted with success" });
});

// Business Logic : Add player

app.post("/players", (req, res) => {
  console.log("Here into BL : Add Player");
  let obj = req.body;
  playersData.push(obj);
  res.json({ msg: "added with success" });
});

// Business Logic : Edit Player
app.put("/players", (req, res) => {
  console.log("Here into BL : Edit Player");
  let obj = req.body;
  for (let i = 0; i < playersData.length; i++) {
    if (playersData[i].id == obj.id) {
      playersData[i] = obj;
    }
  }
  res.json({ msg: "edited with success" });
});

// Business Logic : login

app.post("/users/login", (req, res) => {
  console.log("Here into BL : login");
});

// Business Logic : signup
app.post("/users/subscription", (req, res) => {
  console.log("Here into BL : signup");
});

// make app importable from another files
module.exports = app;
