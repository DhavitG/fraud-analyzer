const { Router } = require("express");
const router = Router();

const { getRisk } = require("../controllers/risk");

router.get("/:wallet", getRisk);

module.exports = router;
