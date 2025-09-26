const User = require("../models/User");
const jwt = require("jsonwebtoken");

export const auth = async (req, res, next) => {
  try {
    let token;
    if (req.cookies.token) {
      token = req.cookies.token;
    } else if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized to enter this route",
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select(-password);
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }
    next();
  } catch {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
