const generateToken = require("../utlities.js");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModels");

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

module.exports = router;
