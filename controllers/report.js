const createReport = (req, res) => {
  const report = req.body;
  res.json(report);
};

module.exports = {
  createReport,
};
