const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const foodRoutes = require("./routes/foodRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const config = require("./config");

const app = express();
const PORT = config.port || 3000;

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/food", foodRoutes);
app.use("/notifications", notificationRoutes);
app.use("/analytics", analyticsRoutes);
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

mongoose.connect(config.mongoURI)
  .then(() => console.log(" MongoDB connected"))
  .catch(err => console.log(" DB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
