const express = require("express");
const users = express.Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/User");
users.use(cors());

const validateEmail = email => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

// Registration
users.post("/register", (req, res) => {
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };

  let usernameMatch = null;
  User.findOne({
    where: {
      username: userData.username
    }
  })
    .then(res => {
      result = res;
    })
    .catch(err => console.log(err));

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        res.json({ error: "That email has already been registered." });
      } else if (usernameMatch !== null) {
        res.json({ error: "That username is taken." });
      } else if (!validateEmail(userData.email)) {
        res.json({ error: "That email is not valid." });
      } else if (userData.username.length < 6) {
        res.json({
          error: "Your username must contain at least 6 characters."
        });
      } else if (userData.username.length > 20) {
        res.json({ error: "Your username must not exceed 20 characters." });
      } else if (userData.password.length < 8) {
        res.json({
          error: "Your password must contain at least 8 characters."
        });
      } else if (userData.password.length > 30) {
        res.json({ error: "Your password must not exceed 30 characters" });
      } else if (userData.password !== userData.confirmPassword) {
        res.json({ error: "Your passwords do not match." });
      } else {
        const hash = bcrypt.hashSync(userData.password, 10);
        userData.password = hash;
        User.create(userData)
          .then(user => {
            let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
              expiresIn: "24hr"
            });
            res.json({ token: token });
          })
          .catch(err => {
            res.send("Error: " + err);
          });
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
          expiresIn: "24hr"
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
