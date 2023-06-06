const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const authorSchema = new mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  name: { type: String, require: true },
  email: {
    type: String,
    required: true,
    maxLength: 320,
    trim: true,
    lowercase: true,
    unique: true,
  },
  blogs: [{ type: String, ref: "blog"}] , //// added a blog ref
  createdAt: { type: Date, default: Date.now },
});

const Author = mongoose.model("author", authorSchema);
module.exports = Author;
