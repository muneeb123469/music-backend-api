const express = require("express");
const router = express.Router();

const {
  createAlbum,
  getAlbumById,
} = require("../controllers/album.controller");
const protect = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");

router.post("/", protect, authorizeRoles("artist"), createAlbum);
router.get("/:id", getAlbumById);

module.exports = router;
