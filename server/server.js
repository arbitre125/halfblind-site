const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const Users = require("./routes/Users");
app.use("/users", Users);

const Chess = require("./routes/Chess");
app.use("/game", Chess);

app.listen(port, () => console.log(`Listening on port ${port}`));
