require("dotenv").config();
const app = require("../app");
const connectDB = require("../config/db");

module.exports = async (req, res) => {
  try {
    await connectDB(); hello world
    return app(req, res);
  } catch (error) {
    return res.status(500).json({ message: "Database connection failed" });
  }
};
