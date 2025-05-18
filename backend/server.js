const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // important to parse JSON body



mongoose
  .connect(
    "mongodb+srv://veereshediga111:LXqyaJqNVZDc00Dw@cluster0.gmsgwu7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
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

app.get("/", (req, res) => {
  res.send("Backed is correct");
});

app.listen(3000, () => console.log("Server running........"));
