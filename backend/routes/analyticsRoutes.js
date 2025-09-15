const express = require("express");
const { getSummary, getUserAnalytics, getDonationTrends, getTopDonors } = require("../controllers/analyticsController");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

router.get("/summary", authMiddleware, getSummary);
router.get("/user/:userId", authMiddleware, getUserAnalytics);
router.get("/trends", authMiddleware, getDonationTrends);
router.get("/top-donors", authMiddleware, getTopDonors);

module.exports = router;
