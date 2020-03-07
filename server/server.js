const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const Users = require("./routes/users");
app.use("/users", Users);

const Chess = require("./routes/game");
app.use("/game", Chess);

app.listen(port, () => console.log(`Listening on port ${port}`));
