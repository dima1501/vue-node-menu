const express = require("express");
const cors = require('cors');

const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use("/", routes);

module.exports = app;
