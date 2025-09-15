const express = require("express");
const { sendNotification, getUserNotifications, markAsSeen } = require("../controllers/notificationController");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();

// Admin or system can send notifications
router.post("/send", authMiddleware, sendNotification);

// User fetches their notifications
router.get("/user/:userId", authMiddleware, getUserNotifications);

// Mark one as seen
router.patch("/:notificationId/seen", authMiddleware, markAsSeen);

module.exports = router;
