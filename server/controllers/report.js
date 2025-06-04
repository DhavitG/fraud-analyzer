const Report = require("../model/report");
 
const createReport = async (req, res) => {
  const { wallet, reason, reporter } = req.body;

  if (!wallet || !reason || !reporter) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const existing = await Report.findOne({ wallet, reason, reporter });
    if (existing) {
      return res.status(400).json({
        error: "You have already submitted this report.",
      });
    } 

    await Report.create({ wallet, reason, reporter });
    res.status(201).json({ message: "Report saved successfully" });
  } catch (err) {
    console.error("MongoDB Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find()
    res.status(200).json(reports)
  } catch(e) {
    console.error('Error fetching reports:', e.message);
    res.status(500).json({ error: 'Internal server error' });
  }

}

module.exports = {
  createReport,
  getAllReports
};
