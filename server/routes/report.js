const {adminAuth} = require("../middlewares/auth")

const { Router } = require("express");
const router = Router();

const { createReport, getAllReports } = require("../controllers/report");

router.post("/",adminAuth, createReport);
router.get("/all",adminAuth, getAllReports)

module.exports = router;
