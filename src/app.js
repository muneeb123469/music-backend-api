const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const musicRoutes = require("./routes/music.routes");
const albumRoutes = require("./routes/album.routes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/music", musicRoutes);
app.use("/api/albums", albumRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "API is working 🚀",
  });
});

module.exports = app;
