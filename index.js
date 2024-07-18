require("dotenv").config();
const express = require("express");

const { ConnectDB } = require("./src/config/db");
const usersRoutes = require("./src/api/router/user");
const postsRoutes = require("./src/api/router/post");
const cloudinary = require("cloudinary").v2;

ConnectDB();

const PORT = 3000;
const app = express();

app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
});

app.use("/user", usersRoutes);
app.use("/post", postsRoutes);

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
