const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema({
  uri: {
    type: String,
    requird: true,
  },

  title: {
    type: String,
    requird: true,
  },

  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    requird: true,
  },
});

const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel;
