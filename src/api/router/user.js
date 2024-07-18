const {
  createUser,
  listUsers,
  updateUser,
  deleteUser,
} = require("../controller/user");
const { upload } = require("../../middlewares/files");

const usersRoutes = require("express").Router();

usersRoutes.post(
  "/create",
  upload.fields([{ name: "profilePhoto" }]),
  createUser
);
usersRoutes.get("/", listUsers);
usersRoutes.put("/:id", upload.fields([{ name: "profilePhoto" }]), updateUser);
usersRoutes.delete("/:id", deleteUser);

module.exports = usersRoutes;
