"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const UserService = require("./user");
const LogService = require("./log");

var app = express();

mongoose.Promise = global.Promise;

var uri = "mongodb+srv://sssaini:sssaini@saasbase-guides.bibzo.mongodb.net/santawars?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/users", async function (req, res, next) {
  try {
    const books = await UserService.listUsers();
    res.json(books);
  } catch (e) {
    next(e);
  }
});

app.post("/user", async function (req, res, next) {
  const { walletId, twitter } = req.body;

  try {
    const books = await UserService.addUser(walletId, twitter);
    res.json(books);
  } catch (e) {
    next(e);
  }
});

app.get("/logs", async function (req, res, next) {
  try {
    const logs = await LogService.listLogs();
    res.json(logs);
  } catch (e) {
    next(e);
  }
});

app.post("/log", async function (req, res, next) {
  const { message } = req.body;

  try {
    const logs = await LogService.addUser(message);
    res.json(logs);
  } catch (e) {
    next(e);
  }
});

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}!`))
