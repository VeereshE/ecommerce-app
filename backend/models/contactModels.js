const mongoose = require("mongoose");

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});


const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact; 
