const mongoose = require("mongoose");

const bookmarkSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "Visited website." },
  favorite: { type: Boolean, default: "false" }
});

module.exports = mongoose.model("Bookmark", bookmarkSchema);
