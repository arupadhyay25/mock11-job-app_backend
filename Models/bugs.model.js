let mongoose = require("mongoose");

let bugSchema = mongoose.Schema({
  title: String,
  Severity: String,
  userID: String,
});

let bugModel = mongoose.model("mock11_bug_app", bugSchema);

module.exports = { bugModel };
