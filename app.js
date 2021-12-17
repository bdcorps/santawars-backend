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

app.get("/addUser", async function (req, res, next) {
  const { walletId, twitter } = req.query;

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

app.get("/addLog", async function (req, res, next) {
  const { message } = req.query;

  try {
    const logs = await LogService.addUser(message);
    res.json(logs);
  } catch (e) {
    next(e);
  }
});

app.listen(3000, "0.0.0.0", function () {
  console.log("server starting on localhost:3000");
});
