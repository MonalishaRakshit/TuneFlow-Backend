/* here we create an api where a artict only creat a music */
const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../services/storage.service");
const jwt = require("jsonwebtoken");

/*API for Create music */
async function createMusic(req, res) {
  //   const token = req.cookies.token;

  //   if (!token) {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }

  //   try {
  //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //     if (decoded.role !== "artist") {
  //       /* only artist can create music */
  //       return res
  //         .status(403)
  //         .json({ message: "you don't have access to create an music" });
  //     }

  const { title } = req.body;
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Music created successfully",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
  // } catch (err) {
  //   console.log(err);
  //   return res.status(401).json({ message: "Unauthorized" });
  // }
}

/*API for Create Album */
async function createAlbum(req, res) {
  // const token = req.cookies.token;

  // if (!token) {
  //   return res.status(401).json({ message: "Unauthorized" });
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   if (decoded.role !== "artist") {
  //     /* only artist can create music */
  //     return res
  //       .status(403)
  //       .json({ message: "you don't have access to create an music" });
  //   }

  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics,
  });

  res.status(201).json({
    message: "Album created successfully",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      musics: album.musics,
    },
  });
  // } catch (err) {
  //   console.log(err);
  //   return res.status(401).json({ message: "Unauthorized" });
  // }
}

/* API for get all the musics saved in the DB */
async function getAllMusics(req, res) {
  const musics = await musicModel
    .find()
    /*.skip(1)*/ //it skips the 1st music because value is 1
    .limit(2)
    .populate("artist");
  /* By using populate we get artist's details */

  res.status(200).json({
    message: "Music fetched successfully",
    musics: musics,
  });
}

/* API for get all the albums */
async function getAllAlbums(req, res) {
  const albums = await albumModel
    .find()
    .select("title artist")
    .populate("artist", "username email");

  res.status(200).json({
    message: "Albums fetched successfully",
    albums: albums,
  });
}

/* This is for got the musics by its album id */
async function getAlbumById(req, res) {
  const albumId = req.params.albumId;

  const album = await albumModel
    .findById(albumId)
    .populate("artist", "username email")
    .populate("musics");

  return res.status(200).json({
    message: "Album fetched successfully",
    album: album,
  });
}

module.exports = {
  createMusic,
  createAlbum,
  getAllMusics,
  getAllAlbums,
  getAlbumById,
};
