const { deleteFile } = require("../../utils/deletefile");
const Post = require("../models/post");
const User = require("../models/user");

const createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);

    const user = await User.find({ username: req.body.username });
    newPost.username = user[0]._id;

    if (req.files) {
      newPost.image = req.files.image[0].path;
    }

    const postCreated = await newPost.save();
    return res.status(201).json(postCreated);
  } catch (error) {
    next(error);
  }
};

const listPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate("username");
    return res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postModify = new Post(req.body);
    postModify._id = id;

    const post = await Post.findById(id);

    postModify.username = postModify.username[0]
      ? postModify.username
      : post.username;

    postModify.description = postModify.description
      ? postModify.description
      : post.description;

    if (req.files) {
      deleteFile(post.image);
      postModify.image = req.files.image[0].path;
    } else {
      postModify = post.image;
    }

    const postUpdated = await Post.findByIdAndUpdate(id, postModify, {
      new: true,
    });
    return res.status(200).json(postUpdated);
  } catch (error) {
    next(error);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const postDeleted = await Post.findByIdAndDelete(id);
    deleteFile(postDeleted.image);
    return res.status(200).json(postDeleted);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createPost,
  listPosts,
  updatePost,
  deletePost,
};
