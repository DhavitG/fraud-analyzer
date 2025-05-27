const createReport = (req, res) => {
  const { wallet, reason, reporter } = req.body;

  if (!wallet || !reason || !reporter) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  res.status(201).json({
    msg: "Report received",
    report: { wallet, reason, reporter },
  });
};

module.exports = {
  createReport,
};
