const Music = require("../models/music.model");
const imagekit = require("../services/storage.service");

const uploadMusic = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Audio file is required",
      });
    }

    const uploadedFile = await imagekit.upload({
      file: req.file.buffer,
      fileName: `${Date.now()}-${req.file.originalname}`,
      folder: "/music-app/songs",
      useUniqueFileName: true,
    });

    const music = await Music.create({
      title,
      audioUrl: uploadedFile.url,
      fileId: uploadedFile.fileId,
      artist: req.user._id,
    });

    res.status(201).json({
      message: "Music uploaded successfully",
      music,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getAllPublishedMusic = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const songs = await Music.find({ isPublished: true })
      .populate("artist", "name email role")
      .skip(skip)
      .limit(limit);

    const totalSongs = await Music.countDocuments({ isPublished: true });

    res.status(200).json({
      message: "Published songs fetched successfully",
      currentPage: page,
      totalPages: Math.ceil(totalSongs / limit),
      totalSongs,
      count: songs.length,
      songs,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  uploadMusic,
  getAllPublishedMusic,
};
