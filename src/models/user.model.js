const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requird: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    requird: true,
  },

  /* Here 'enum' says , in this property role enum has any one value either 'user' or 'artist' */
  role: {
    type: String,
    enum: ["user", "artist"],
    default: "user",
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
