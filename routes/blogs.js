const express = require("express");
const router = express.Router();

const {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} = require("../controller/blogController");

router.get("/get-all", getAllBlogs);
router.post("/new-blog", createBlog);
router.get("/get-blog-by-id/:id", getBlogById);
router.put("/update-blog/:id", updateBlogById);
router.delete("/delete-blog/:id", deleteBlogById);

module.exports = router;
