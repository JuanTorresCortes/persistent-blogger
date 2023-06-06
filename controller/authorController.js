const { json } = require("express");
const Author = require("../model/Author");

const getAllAuthors = async (req, res) => {
  // http://localhost:3000/authors/all-authors
  try {
    const allAuthors = await Author.find({}).populate('blogs'); // added populate
    if (allAuthors.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "there are no authors" });
    }
    res.status(200).json({ success: true, data: allAuthors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createAuthor = async (req, res) => {
  // http://localhost:3000/authors/new-author
  try {
    const newAuthor = await new Author(req.body);
    const saveAuthor = await newAuthor.save();
    res.status(200).json({ success: true, data: saveAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAuthorById = async (req, res) => {
  // http://localhost:3000/authors/get-author-by-id/ > author id <
  try {
    const getAuthor = await Author.findById({ _id: req.params.id });
    if (!getAuthor) {
      return res
        .status(400)
        .json({ success: false, message: "author was not found" });
    }
    res.status(200).json({ success: false, data: getAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const updateAuthorById = async (req, res) => {
  // http://localhost:3000/authors/update-author/ > author id <
  try {
    const updateAuthor = await Author.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    if (!updateAuthor) {
      res.status(400).json({ success: false, message: " author not found " });
    }
    res.status(200).json({ success: true, data: updateAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const deleteAuthorById = async (req, res) => {
  // http://localhost:3000/authors/delete-author/ > author id <
  try {
    const deleteAuthor = await Author.findByIdAndDelete({ _id: req.params.id });
    if (!deleteAuthor) {
      res.status(400).json({ success: false, message: " author not found " });
    }
    res.status(200).json({ success: true, data: deleteAuthor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
};
