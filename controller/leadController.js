const Lead = require("../models/Lead");

// Add a new lead
exports.addLead = async (req, res) => {
  try {
    const { name, phone,email, countryCode } = req.body;

    // Create new lead
    const lead = new Lead({ name, phone,email, countryCode });
    await lead.save();

    res.json(lead);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
