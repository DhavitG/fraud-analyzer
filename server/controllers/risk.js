const fs = require("fs").promises;
const path = require("path");

const getRisk = async (req, res) => {
  const walletAddress = req.params.wallet;

  if (!walletAddress) {
    return res.status(400).json({ error: "Wallet address is required" });
  }

  try {
    const filePath = path.join(__dirname, "..", "data", "risk_data.json");
    const data = await fs.readFile(filePath, "utf-8");
    const risks = JSON.parse(data);

    const riskInfo = risks[walletAddress];

    if (!riskInfo) {
      return res
        .status(404)
        .json({ error: "No risk info found for this address" });
    }

    res.json(riskInfo);
  } catch (error) {
    console.error("Error reading risk data:", error);
    res.status(500).json({ error: "Failed to load risk data" });
  }
};

module.exports = {
  getRisk,
};
