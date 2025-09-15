const User = require("../model/User");
const Food = require("../model/Food");

// Get overall summary
exports.getSummary = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalDonors = await User.countDocuments({ role: "donor" });
    const totalConsumers = await User.countDocuments({ role: "consumer" });

    const totalFoods = await Food.countDocuments();
    const activeFoods = await Food.countDocuments({ status: "available" });
    const donatedFoods = await Food.countDocuments({ status: "donated" });

    res.json({
      users: { total: totalUsers, donors: totalDonors, consumers: totalConsumers },
      foods: { total: totalFoods, active: activeFoods, donated: donatedFoods },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get analytics for a specific user
exports.getUserAnalytics = async (req, res) => {
  try {
    const userId = req.params.userId;

    const donated = await Food.countDocuments({ provider: userId });
    const consumed = await Food.countDocuments({ consumer: userId });

    res.json({
      userId,
      donated,
      consumed,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get donations trend ( by day)
exports.getDonationTrends = async (req, res) => {
  try {
    const trends = await Food.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          totalDonations: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    res.json(trends);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get top donors (leaderboard)
exports.getTopDonors = async (req, res) => {
  try {
    const donors = await Food.aggregate([
      { $match: { provider: { $ne: null } } },
      { $group: { _id: "$provider", totalDonations: { $sum: 1 } } },
      { $sort: { totalDonations: -1 } },
      { $limit: 5 },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "donor",
        },
      },
      { $unwind: "$donor" },
      {
        $project: {
          _id: 0,
          donorId: "$donor._id",
          name: "$donor.name",
          email: "$donor.email",
          totalDonations: 1,
        },
      },
    ]);

    res.json(donors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
