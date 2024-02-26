// controller/ContactController.js

const Contact = require("../models/Contact");
const Service = require("../models/Service");

exports.service = async (req, res) => {
  try {
    const { name,email,country, countryCode, phone, service, waNumber } = req.body;

    // Create a new contact document
    const newService = new Service({
      name,
      country,
      service,
      waNumber,
      countryCode,
      phone,
      email,
    });

    // Save the contact in the database
    await newService.save();

    res.status(201).json({
      message: "Service details saved successfully",
      service: newService,
    });
  } catch (error) {
    console.error("Error saving Service details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


exports.contactUs = async (req, res) => {
  try {
    const { name,email, countryCode, phone,msg } = req.body;

    // Create a new contact document
    const newContact = new Contact({
      name,
      countryCode,
      phone,
      msg,
      email,
    });

    // Save the contact in the database
    await newContact.save();

    res.status(201).json({
      message: "Contact details saved successfully",
      contact: newContact,
    });
  } catch (error) {
    console.error("Error saving contact details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};