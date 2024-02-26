const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");

// Service route
router.post("/service", contactController.service);

// Contact route
router.post("/contact-us", contactController.contactUs);



module.exports = router;
