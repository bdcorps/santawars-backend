var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  walletId: String,
  twitter: String,
});

var userModel = mongoose.model("user", userSchema, "user");

module.exports = userModel;
