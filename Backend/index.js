require("dotenv").config();
const express = require("express");
const approute = require("./app");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", approute);

// connect to MongoDB
connectDB();

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is working on PORT ${process.env.PORT || 3000}`);
});
