const Report = require("../model/report");

const createReport = async (req, res) => {
  const { wallet, reason, reporter } = req.body;

  if (!wallet || !reason || !reporter) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await Report.create({ wallet, reason, reporter });
    res.status(201).json({ message: "Report saved successfully" });
  } catch (err) {
    console.error("MongoDB Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createReport,
};
