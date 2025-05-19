const generateToken = require("../utlities.js");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModels");
const contactSchema = require("../models/contactModels.js");
const reviewSchema = require("../models/reviewModel.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, address, phone } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      phone,
    });

    res
      .status(201)
      .json({
        message: "User registered successfully.",
        token: generateToken(newUser._id),
      });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }
    res.json({
      _id: user._id,
      name: user.firstName + " " + user.lastName,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// CONTACT-US
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      message: "All fields (name, email, message) are required.",
    });
  }

  try {
    const newContact = await contactSchema.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      message: "Contact submitted successfully.",
      token: generateToken(newContact._id), 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while submitting your contact form.",
    });
  }
});


// REVIEW
router.post("/review", async (req, res) => {
  const { name, email, rating, review } = req.body;

  if (!name || !email || !review ||! rating) {
    return res.status(400).json({
      message: "All fields (name, email, rating, review) are required.",
    });
  }

  try {
    const newReview = await reviewSchema.create({
      name, email, rating, review
    });

    res.status(201).json({
      message: "Review submitted successfully.",
      token: generateToken(newReview._id), 
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while submitting your contact form.",
    });
  }
});





module.exports = router;
