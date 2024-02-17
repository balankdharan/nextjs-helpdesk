const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
const PORT = process.env.PORT || 5000;
const testRoutes = require("./routes/test");

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// require("./db");

// API endpoints
app.use("/api", testRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
