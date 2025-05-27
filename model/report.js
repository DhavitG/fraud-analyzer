const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  wallet: { type: String, required: true },
  reason: { type: String, required: true },
  reporter: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);
