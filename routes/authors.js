const express = require("express");
const router = express.Router();

const {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
} = require("../controller/authorController");

router.get("/all-authors", getAllAuthors);
router.post("/new-author", createAuthor);
router.get("/get-author-by-id/:id", getAuthorById);
router.put("/update-author/:id", updateAuthorById);
router.delete("/delete-author/:id", deleteAuthorById);

module.exports = router;
