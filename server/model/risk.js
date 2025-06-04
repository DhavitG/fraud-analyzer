const mongoose = require("mongoose")

const IncidentSchema = new mongoose.Schema({
    date: {type: String, required: true},
    summary: {type: String, required: true},
    source: {type: String, default: "Backend"}
})

const RiskSchema = new mongoose.Schema({
    wallet: {type: String, required: true, unique: true},
    risk_level: {type: String, required: true},
    incidents: [IncidentSchema]
})

module.exports = mongoose.model("Risk", RiskSchema);