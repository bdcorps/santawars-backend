var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var logSchema = new Schema({
  message: String,
});

var logModel = mongoose.model("log", logSchema, "log");

module.exports = logModel;
