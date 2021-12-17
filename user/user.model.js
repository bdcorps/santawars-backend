var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  title: String,
  author: String,
  rating: Number,
});

var userModel = mongoose.model("user", userSchema, "user");

module.exports = userModel;
