const eventSchema = new mongoose.Schema({
  name: String,
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  date: Date,
  location: String,
  foodListings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Food" }]
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);
