const express = require("express");
const cors = require("cors");
const env = require('./config/env');

const errorHandle = require("./middleware/errorMiddleware");
const allRoutes = require("./routes/index");

const app = express();

app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true,
  })
); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API Running Successfully",
  });
});

app.use("/api", allRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

app.use(errorHandle);

module.exports = app;