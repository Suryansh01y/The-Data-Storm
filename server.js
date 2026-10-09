require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/db");
const postRoutes = require("./src/routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Request logger middleware
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl} - ${new Date().toLocaleTimeString()}`);
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "The Data Hub API is running",
    status: "OK"
  });
});

app.use("/posts", postRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

app.use((err, req, res, next) => {
  console.error(err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(err.status || 500).json({
    message: err.status ? err.message : "Internal server error."
  });
});

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`The Data Hub API is running on port ${PORT}`);
      console.log(`Local URL: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed because the database connection could not be established.",error.message);
    process.exit(1);
  }
}

startServer();
