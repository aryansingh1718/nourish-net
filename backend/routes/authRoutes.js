const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { signupSchema, loginSchema } = require("../utils/zod");
const authMiddleware = require("../utils/authMiddleware")

// Middleware to validate request
function validate(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      return res.status(400).json({ error: err.errors[0].message });
    }
  };
}

// Signup
router.post("/signup",validate(signupSchema), authController.signup);

// Login
router.post("/login",validate(loginSchema), authController.login);

// Get current user profile
router.get("/profile",authMiddleware, authController.getProfile);

module.exports = router;
