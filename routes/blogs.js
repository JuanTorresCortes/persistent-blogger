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
router.get("/get-blog-ById", getBlogById);
router.put("/update-Blog-ById", updateBlogById);
router.delete("/delete-Blog-ById", deleteBlogById);

module.exports = router;
