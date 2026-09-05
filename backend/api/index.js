require("dotenv").config();
const app = require("../app");
const connectDB = require("../config/dbs");

module.exports = async (req, res) => {
  try {
    await connectDB();
    return app(req, res);
  } catch (error) {
    return res.status(500).json({ message: "Database connection failed" });
  }
};
