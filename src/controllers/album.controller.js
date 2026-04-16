const Album = require("../models/album.model");

const createAlbum = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Album title is required",
      });
    }

    const album = await Album.create({
      title,
      description,
      artist: req.user._id,
    });

    res.status(201).json({
      message: "Album created successfully",
      album,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAlbumById = async (req, res) => {
  try {
    const { id } = req.params;

    const album = await Album.findById(id).populate(
      "artist",
      "name email role",
    );

    if (!album) {
      return res.status(404).json({
        message: "Album not found",
      });
    }

    res.status(200).json({
      message: "Album fetched successfully",
      album,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAlbum,
  getAlbumById,
};
