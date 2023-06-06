const { json } = require("express");
const Blog = require("../model/Blog");
const Author = require("../model/Author"); // added author model

const getAllBlogs = async (req, res) => {
  // http://localhost:3000/blogs/get-all
  try {
    const allBlogs = await Blog.find({}).populate( "owner" );
    if (allBlogs.length === 0) {
      res.status(400).json({ success: true, message: "empty no blogs" });
    }
    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createBlog = async (req, res) => {
  // http://localhost:3000/blogs/new-blog
  try {
    const { owner } = req.body;
    const newBlog = await new Blog(req.body);

    const updateAuthor = await Author.findOneAndUpdate( // added updateAuthor
      { _id: owner },
      { $push: { blogs: newBlog._id } }
    )
    await updateAuthor.save(); //// saved it 
    const saveBlog = await newBlog.save();
    res.status(200).json({ success: true, data: saveBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getBlogById = async (req, res) => {
  // http://localhost:3000/blogs/get-blog-by-id/ > blog id <
  try {
    const getBlog = await Blog.findById({ _id: req.params.id });
    if (!getBlog) {
      return res
        .status(400)
        .json({ success: false, message: " blog not found " });
    }
    res.status(200).json({ success: true, data: getBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateBlogById = async (req, res) => {
  // http://localhost:3000/blogs/update-blog/ > blog id <
  try {
    const targetBlog = await Blog.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!targetBlog) {
      return res
        .status(400)
        .json({ success: false, message: "blog not found" });
    }
    res.status(200).json({ success: true, data: targetBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteBlogById = async (req, res) => {
  // http://localhost:3000/blogs/delete-blog/ > blog id <
  try {
    const deleteBlog = await Blog.findByIdAndDelete({ _id: req.params.id });
    if (!deleteBlog) {
      return res
        .status(400)
        .json({ success: false, message: "blog not found" });
    }
    res.status(200).json({ success: true, data: deleteBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
};
