const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    username: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
    image: { type: String, required: true, trim: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("posts", postSchema, "posts");

module.exports = Post;
