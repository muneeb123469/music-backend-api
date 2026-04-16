const express = require("express");
const router = express.Router();

const {
  uploadMusic,
  getAllPublishedMusic,
} = require("../controllers/music.controller");
const protect = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");
const upload = require("../middleware/upload.middleware");

router.get("/", getAllPublishedMusic);

router.post(
  "/upload",
  protect,
  authorizeRoles("artist"),
  upload.single("audio"),
  uploadMusic,
);

module.exports = router;
