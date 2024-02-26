const express = require("express");
const router = express.Router();
const leadController = require("../controller/leadController");

// Route: POST /api/lead
router.post("/lead", leadController.addLead);

module.exports = router;
