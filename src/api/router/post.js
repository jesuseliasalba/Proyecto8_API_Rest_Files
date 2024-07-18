const {
  createPost,
  listPosts,
  updatePost,
  deletePost,
} = require("../controller/post");
const { upload } = require("../../middlewares/files");

const postsRoutes = require("express").Router();

postsRoutes.post("/create", upload.fields([{ name: "image" }]), createPost);
postsRoutes.get("/", listPosts);
postsRoutes.put("/:id", upload.fields([{ name: "image" }]), updatePost);
postsRoutes.delete("/:id", deletePost);

module.exports = postsRoutes;
