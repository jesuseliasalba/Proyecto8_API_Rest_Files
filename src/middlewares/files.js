const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const choosefolderName = (req, file) => {
  const ruta = req.baseUrl;

  let folderName = "proyecto8";

  if (ruta.includes("/user")) {
    folderName = "proyecto8/user";
  } else if (ruta.includes("/post")) {
    folderName = "proyecto8/post";
  }

  return folderName;
};

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: choosefolderName,
    allowedFormats: ["jpg", "png", "jpeg", "gif", "webp"],
  },
});

const upload = multer({ storage });

module.exports = { upload };
