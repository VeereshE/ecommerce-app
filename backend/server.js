const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Review = require("./models/reviewModel");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://veereshediga111:Veeresh6363@cluster0.3qaksb9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

// Server main "/"
app.get("/", (res) => {
  res.send("Backed is correct");
});

// Route to fetch reviews
app.get("/api/review", async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve reviews" });
  }
});

app.listen(5000, () => console.log("Server running........"));
