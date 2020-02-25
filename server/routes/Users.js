const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

process.env.SECRET_KEY = "secret";

// Registration
users.post("/register", (req, res) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        const hash = bcrypt.hashSync(userData.password, 10);
        userData.password = hash;
        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: 1440
            });
            res.json({ token: token });
          })
          .catch(err => {
            res.send("Error: " + error);
          });
      } else {
        res.json({ error: "User already exists." });
      }
    })
    .catch(err => {
      res.send("Error: " + err);
    });
});

// Login
users.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (
        user !== null &&
        bcrypt.compareSync(req.body.password, user.password)
      ) {
        let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
          expiresIn: 1440
        });
        res.json({ token: token });
      } else {
        res.send(false);
      }
    })
    .catch(err => {
      res.send("Error: " + err);
    });
});

// Get Profile
users.get("/profile", (req, res) => {
  const decoded = jwt.verify(
    req.headers["authorization"],
    process.env.SECRET_KEY
  );

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.send("User does not exist.");
      }
    })
    .catch(err => {
      res.send("Error: " + err);
    });
});

module.exports = users;
