const mongoose = require("mongoose");

const artistProfileSchema = new mongoose.Schema({
  desc: {},
  name: {},
  img_url: {},
  spptify_url: {},
});

const profileModel = mongoose.model("artist_profiles", artistProfileSchema);

module.exports = profileModel;
