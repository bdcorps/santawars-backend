"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const UserService = require("./user");

var app = express();

mongoose.Promise = global.Promise;

var uri = "mongodb://localhost:27017/bookstore";
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

app.get("/listUsers", async function (req, res, next) {
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

app.listen(3000, "0.0.0.0", function () {
  console.log("server starting on localhost:3000");
});
