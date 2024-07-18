const { deleteFile } = require("../../utils/deletefile");
const User = require("../models/user");

const createUser = async (req, res, next) => {
  try {
    const userUnique = await User.findOne({ username: req.body.username });
    if (userUnique) {
      return res.status(400).json("This username already exists");
    }

    const newUser = new User({
      username: req.body.username,
      name: req.body.name,
      profilePhoto: req.body.profilePhoto,
      mail: req.body.mail,
    });

    if (req.files) {
      newUser.profilePhoto = req.files.profilePhoto[0].path;
    }

    const userCreated = await newUser.save();
    return res.status(201).json(userCreated);
  } catch (error) {
    next(error);
  }
};

const listUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userModify = new User(req.body);

    userModify._id = id;
    if (req.files) {
      const user = await User.findById(id);
      deleteFile(user.profilePhoto);
      userModify.profilePhoto = req.files.profilePhoto[0].path;
    }

    const userUpdated = await User.findByIdAndUpdate(id, userModify, {
      new: true,
    });

    return res.status(200).json(userUpdated);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    deleteFile(userDeleted.profilePhoto);
    return res.status(200).json(userDeleted);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  listUsers,
  updateUser,
  deleteUser,
};
