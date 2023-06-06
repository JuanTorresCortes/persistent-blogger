const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const blogSchema = new mongoose.Schema({
    _id: { type: String, default: () => uuid() },
    owner: { type: String, ref: "author", required: true }, //// added owner
    title: { type: String, require: true},
    content: { type: String, require: true},
    lastModified: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
})

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;