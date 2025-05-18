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

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      phone,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Something went wrong." });
  }
});

module.exports = router;
