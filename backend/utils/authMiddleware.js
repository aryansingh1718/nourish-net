const jwt = require("jsonwebtoken");
const User = require("../model/User");
const config = require("../config");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ error: "User not found" });
    }
    next(); 
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Token is not valid" });
  }
};

module.exports = authMiddleware;
