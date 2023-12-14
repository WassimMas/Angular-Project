// import express application

const express = require("express");

// import body-parser module

const bodyParser = require("body-parser");

// import mongoose module

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");

// import bcrypt module
const bcrypt = require("bcrypt");
// import axios module

const axios = require("axios");

// import multer module

const multer = require("multer");

// import path module

const path = require("path");

// create express application

const app = express();

// configuration bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader(
    "Access-Control-Allow-Headers",

    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );

  res.setHeader(
    "Access-Control-Allow-Methods",

    "GET, POST, DELETE, PATCH, PUT"
  );

  next();
});
//configuration multer
app.use("/images", express.static(path.join("backend/images")));

const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storageConfig = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

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

//Models Importation

const Match = require("./models/match");
const Player = require("./models/player");
const User = require("./models/user");
const Team = require("./models/team");

// Business Logic : Get All Matches
app.get("/matches", (req, res) => {
  console.log("Here into BL : Get All Matches");
  // res.json({ matches: matchesData });
  Match.find().then((docs) => {
    res.json({ matches: docs });
  });
});

// Business Logic : Get Match By ID
app.get("/matches/:id", (req, res) => {
  console.log("Here into BL : Get Match By ID");
  // let matchId = req.params.id;

  // for (let i = 0; i < matchesData.length; i++) {
  //   if (matchesData[i].id == matchId) {
  //     res.json({ match: matchesData[i] });
  //   }
  // }

  // let findedMatch = matchesData.find((obj) => {
  //   return obj.id == matchId;
  // });
  // res.json({ match: findedMatch });

  Match.findById(req.params.id).then((doc) => {
    res.json({ match: doc });
  });
});

// Business Logic : Add Match
app.post("/matches", (req, res) => {
  console.log("Here into BL : Add Match ");
  let obj = new Match(req.body);
  obj.save();
  res.json({ msg: "object added with success" });
  // console.log("here object from FE", obj);
  // matchesData.push(obj);
  // res.json({ msg: "object added with success" });
});
// Business Logic : Delete Match

app.delete("/matches/:id", (req, res) => {
  console.log("Here into BL : Delete Match ");
  let matchId = req.params.id;
  // for (let i = 0; i < matchesData.length; i++) {
  //   if (matchesData[i].id == matchId) {
  //     matchesData.splice(i, 1);
  //     beak;
  //   }
  // }
  // res.json({ msg: "deleted with success" });

  Match.deleteOne({ _id: matchId }).then((deleteResponse) => {
    console.log("here response after delete", deleteResponse);
    if (deleteResponse.deletedCount == 1) {
      res.json({ msg: true });
    } else {
      res.json({ msg: false });
    }
  });
});
// Business Logic : Edit Match

app.put("/matches", (req, res) => {
  console.log("Here into BL : Edit Match ");
  let obj = req.body;
  // console.log("here object from FE", obj);
  // for (let i = 0; i < matchesData.length; i++) {
  //   if (matchesData[i].id == obj.id) {
  //     matchesData[i] = obj;
  //     break;
  //   }
  // }
  // res.json({ editedMatch: true });

  Match.updateOne({ _id: req.body._id }, obj).then((updateResponse) => {
    console.log("here response after update", updateResponse);
    if (updateResponse.nModified == 1) {
      res.json({ isUpdated: true });
    } else {
      res.json({ isUpdated: false });
    }
  });
});

// Business Logic : Get All Teams

app.get("/teams", (req, res) => {
  console.log("Here into BL : Get All Teams");
  // res.json({ teams: teamData });
  Team.find().then((docs) => {
    res.json({ teams: docs });
  });
});

// Business Logic : Get Team By ID

app.get("/teams/:id", (req, res) => {
  console.log("Here into BL : Get Team By ID");
  // let teamId = req.params.id;
  // let findedTeam = teamData.find((obj) => {
  //   return obj.id == teamId;
  // });
  // res.json({ team: findedTeam });

  Team.findById(req.params.id).then((doc) => {
    res.json({ team: doc });
  });
});
// Business Logic : Delete Team By ID
app.delete("/teams/:id", (req, res) => {
  console.log("Here into BL : Delete Team By ID");
  let teamId = req.params.id;
  // for (let i = 0; i < teamData.length; i++) {
  //   if (teamData[i].id == teamId) {
  //     teamData.splice(i, 1);
  //     break;
  //   }
  // }
  // res.json({ msg: "deleted with success" });
  Team.deleteOne({ _id: teamId }).then((deletedItem) => {
    console.log("here response after delete", deletedItem);
    if (deletedItem.deletedCount == 1) {
      res.json({ msg: "deleted with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});

// Business Logic : Add Team
app.post("/teams", (req, res) => {
  console.log("Here into BL : Add Team");
  let obj = new Team(req.body);
  // console.log("Here object from FE");
  // teamData.push(obj);
  // res.json({ msg: "Added with success" });
  obj.save();
  res.json({ msg: "Added with success" });
});

// Business Logic : Edit Team
app.put("/teams", (req, res) => {
  console.log("Here into BL : edit Team");
  let obj = req.body;
  // console.log("here object from FE", obj);
  // for (let i = 0; i < teamData.length; i++) {
  //   if (teamData[i].id == obj.id) {
  //     teamData[i] = obj;
  //   }
  // }
  // res.json({ msg: "Edited with success" });

  Team.updateOne({ _id: req.body._id }, obj).then((updatedResponse) => {
    console.log("here response after undate", updatedResponse);
    if (updatedResponse.nModified == 1) {
      res.json({ isUpdated: true });
    } else {
      res.json({ isUpdated: false });
    }
  });
});

// Business Logic : Get All Players
app.get("/players", (req, res) => {
  console.log("Here into BL : Get All Players");
  // res.json({ players: playersData });

  Player.find().then((docs) => {
    res.json({ players: docs });
  });
});

// Business Logic : Get Player By ID

app.get("/players/:id", (req, res) => {
  console.log("Here into BL : Get Player By ID");
  // let playerId = req.params.id;
  // let findedPlayer = playersData.find((obj) => {
  //   return obj.id == playerId;
  // });
  // res.json({ player: findedPlayer });

  Player.findById(req.params.id).then((doc) => {
    res.json({ player: doc });
  });
});

// Business Logic : Delete Player By ID

app.delete("/players/:id", (req, res) => {
  console.log("Here into BL : Delete Player By ID");
  // let playerId = req.params.id;
  // for (let i = 0; i < playersData.length; i++) {
  //   if (playersData[i].id == playerId) {
  //     playersData.splice(i, 1);
  //   }
  // }
  // res.json({ msg: "deleted with success" });
  Player.deleteOne({ _id: req.params.id }).then((deletedResponse) => {
    console.log("here response after delete", deletedResponse);
    if (deletedResponse.deletedCount == 1) {
      res.json({ msg: "deleted with success" });
    } else {
      res.json({ msg: "error" });
    }
  });
});

// Business Logic : Add player

app.post("/players", (req, res) => {
  console.log("Here into BL : Add Player", req.body);
  Team.findById(req.body.teamId).then((team) => {
    if (!team) {
      return res.json({ message: "team not found" });
    }
    const player = new Player({
      position: req.body.position,
      name: req.body.name,
      number: req.body.number,
      age: req.body.age,
      team: team._id,
    });
    player.save((err, doc) => {
      team.players.push(player);
      team.save();
      res.json({ msg: "Player added with success" });
    });
  });
});

// Business Logic : Edit Player
app.put("/players", (req, res) => {
  console.log("Here into BL : Edit Player");
  let obj = req.body;
  // for (let i = 0; i < playersData.length; i++) {
  //   if (playersData[i].id == obj.id) {
  //     playersData[i] = obj;
  //   }
  // }
  // res.json({ msg: "edited with success" });
  Player.updateOne({ _id: obj._id }, obj).then((updatedResponse) => {
    console.log("here response after update", updatedResponse);
    if (updatedResponse.nModified == 1) {
      res.json({ isUpdated: true });
    } else {
      res.json({ isUpdated: false });
    }
  });
});

// Business Logic : login

app.post("/users/login", (req, res) => {
  console.log("Here into BL : login", req.body);
  // User.findOne({ email: req.body.email, password: req.body.password }).then(
  //   (doc) => {
  //     console.log("here response of findOne", doc);
  //     if (doc) {
  //       res.json({ msg: true });
  //     } else {
  //       res.json({ msg: false });
  //     }
  //   }
  // );
  let result;
  User.findOne({ email: req.body.email })
    .then((doc) => {
      console.log("here finded user by email", doc);
      if (!doc) {
        return res.json({ msg: "please check your email" });
      }
      result = doc;
      return bcrypt.compare(req.body.password, doc.password);
    })
    .then((pwdCompare) => {
      console.log("here pwdCompare", pwdCompare);
      if (pwdCompare) {
        res.json({
          msg: "Welcome",
          firstName: result.firstName,
          lastName: result.lastName,
          id: result._id,
        });
      } else {
        res.json({ msg: "please check your paswword" });
      }
    });
});

// Business Logic : signup
app.post(
  "/users/subscription",
  multer({ storage: storageConfig }).single("img"),
  (req, res) => {
    console.log("Here into BL : signup", req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
      if (doc) {
        res.json({ msg: "Oops email exist!" });
      } else {
        bcrypt.hash(req.body.pwd, 8).then((cryptedPwd) => {
          console.log("here crypted pwd", cryptedPwd);
          req.body.pwd = cryptedPwd;
          req.body.avatar = `http://localhost:3000/images/${req.file.filename}`;
          let user = new User(req.body);
          user.save((err, doc) => {
            if (err) {
              res.json({ msg: "Failed" });
            } else {
              res.json({ msg: "Added with success" });
            }
          });
        });
      }
    });
  }
);

// Business Logic : get all users

app.get("/users", (req, res) => {
  console.log("here into BL : get all users");
  User.find().then((docs) => {
    res.json({ users: docs });
  });
});

// Business Logic : Weather
app.post("/weather", (req, res) => {
  console.log("here into BL weather", req.body);
  // let key = "eb30405ada47bad2baf56405303e85b9";
  let key = "62ee756a34835483299877a61961cafb";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.cityName}&appid=${key}`;
  axios.get(apiURL).then((response) => {
    console.log("here API response", response.data);
    let weatherToSend = {
      temperature: response.data.main.temp,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      speed: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    };
    res.json({ result: weatherToSend });
  });
});
// Business Logic: Get All Team Information

app.get("/teams/:teamId/info", (req, res) => {
  console.log("Here into BL : Get All Team Infos", req.params.teamId);
  Team.findOne({ _id: req.params.teamId })
    .populate("players")
    .then((docs) => {
      console.log("here teams", docs);
      res.json({ x: docs });
    });
});

// make app importable from another files
module.exports = app;
