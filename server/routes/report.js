const { Router } = require("express");
const router = Router();

const { createReport } = require("../controllers/report");

router.post("/", createReport);

module.exports = router;
