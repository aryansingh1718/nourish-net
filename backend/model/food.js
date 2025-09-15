const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  foodType: { type: [String], required: true }, // Rice, Roti, etc.
  quantity: { type: Number, required: true }, // number of plates
  location: { type: String, required: true },
  expiryTime: { type: Date, required: true }, // when it will expire
  status: { 
    type: String, 
    enum: ["available", "near_expiry", "expired"], 
    default: "available" 
  }
}, { timestamps: true });

module.exports = mongoose.model("Food", foodSchema);
