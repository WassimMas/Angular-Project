// import express application

const express = require("express");

// import body-parser module

const bodyParser = require("body-parser");

// create express application

const app = express();

// configuration

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let matchesData = [
  { id: 1, teamOne: "EST", teamTwo: "CA", scoreOne: 1, scoreTwo: 1 },
  { id: 2, teamOne: "ESS", teamTwo: "CSS", scoreOne: 3, scoreTwo: 1 },
  { id: 3, teamOne: "FCB", teamTwo: "RMD", scoreOne: 2, scoreTwo: 1 },
  { id: 4, teamOne: "FCB", teamTwo: "RMD", scoreOne: 3, scoreTwo: 3 },
  { id: 5, teamOne: "FCB", teamTwo: "RMD", scoreOne: 5, scoreTwo: 3 },
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
});

// Business Logic : Get Team By ID

app.get("/teams/:id", (req, res) => {
  console.log("Here into BL : Get Team By ID");
});
// Business Logic : Delete Team By ID
app.delete("/teams/:id", (req, res) => {
  console.log("Here into BL : Delete Team By ID");
});

// Business Logic : Add Team
app.post("/teams", (req, res) => {
  console.log("Here into BL : Add Team");
});

// Business Logic : Edit Team
app.put("/teams", (req, res) => {
  console.log("Here into BL : edit Team");
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
