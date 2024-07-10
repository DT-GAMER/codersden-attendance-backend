const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const PORT = process.env.PORT || 3000;
const password = process.env.DB_URI;
const DB_URI = `mongodb+srv://meet-attendance:${password}@node-tuts.fmgzprx.mongodb.net/cden-backend?retryWrites=true&w=majority&appName=node-tuts`;

mongoose
  .connect(DB_URI, {
    tlsAllowInvalidCertificates: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
