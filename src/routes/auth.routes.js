const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth.controller");
const protect = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/artist-only", protect, authorizeRoles("artist"), (req, res) => {
  res.status(200).json({
    message: "Welcome artist, you are authorized",
    user: req.user,
  });
});

module.exports = router;
