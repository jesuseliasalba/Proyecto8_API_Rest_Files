const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const users = require("../../data/user-seed");
const User = require("../../api/models/user");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_key: process.env.CLOUDINARY_API_KEY,
});

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    console.log("Conectado a la base de datos");
    const allUsers = await User.find();
    if (allUsers.length) {
      await User.collection.drop();
      //   cloudinary.api
      //     .delete_resources("proyecto8/user", console.log())
      //     .then((result) => console.log(result));
      //! Se que tengo que borrar las fotos de todos los usuarios pero
      //! he probado todas las opciones de la api de cloudinary y la
      //! unica forma de borrar que he conseguido es borrarlo TODO con
      //! cloudinary.api.delete_all_resources("proyecto8/user");

      console.log("Todos los usuarios han sido borrados");
    }
  })
  .catch((err) => console.log(`Error borrando los datos: ${err}`))
  .then(async () => {
    await User.insertMany(users);
    console.log("Todos los usuarios han sido añadidos");
  })
  .catch((err) => console.log(`Error borrando los datos: ${err}`))
  .finally(() => {
    mongoose.disconnect();
    console.log("Desconectado de la base de datos");
  });
