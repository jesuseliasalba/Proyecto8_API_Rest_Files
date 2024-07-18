const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    profilePhoto: { type: String, required: true, trim: true },
    mail: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema, "users");

module.exports = User;
