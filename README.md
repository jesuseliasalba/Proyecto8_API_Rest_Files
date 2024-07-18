# Project 8: Api File

## _Rock The Code_

## Description

This project is a web application that manages the storage of users and the publications they make. This API is built with Node.js, Express, Cloudinary and Multer. The database used is mongoDB.

## Index:

- [Scripts](#Scripts)
- [Structure](#Structure)
- [Routes](#routes)
- [Environmental Variables](#ENV)
- [Dependencies](#Dependencies)
- [Contact](#Contact)

## Scripts:

To start the api:

```
npm run start
```

To start the API in developer mode and restart the API with every change:

```
npm run dev
```

And the last script we have is to be able to insert a data seed in our database:

```
npm run seed
```

> [!CAUTION]
> Beware that this last script deletes everything in the database.

## Structure

```
Proyecto8_API_Rest_Files
├─ .gitignore
├─ index.js
├─ Insomnia&Postman-Querys.har
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ api
   │  ├─ controller
   │  │  ├─ post.js
   │  │  └─ user.js
   │  ├─ models
   │  │  ├─ post.js
   │  │  └─ user.js
   │  └─ router
   │     ├─ post.js
   │     └─ user.js
   ├─ config
   │  └─ db.js
   ├─ data
   │  └─ user-seed.js
   ├─ middlewares
   │  └─ files.js
   └─ utils
      ├─ deletefile.js
      └─ seed
         └─ users.js

```

### index.js

This file is the entry point of the application. It configures and starts the server, connects to the database and defines routes for users and posts. It handles global errors and listens on port 3000.

## Routes

#### Users (`user.js`)

- `POST /create` - Register a new user.
- `GET /` - List all users.
- `PUT /:id` - Update a user by ID.
- `DELETE /:id` - Delete a user by ID.

#### Post (`post.js`)

- `POST /create` - Create a new post.
- `GET /` - List all posts.
- `PUT /:id` - Update a post by ID.
- `DELETE /:id` - Delete a post by ID.

### Configuration

#### Storage File (`files.js`)

- `upload` - It is the middleware for uploading files to cloudinary.
- `choosefolderName` - It is the function to select the name of the folder where the uploaded image will be saved, it extracts it from the url.

#### Delete File (`deleteFile.js`)

- `deletefile` - Utility to erase images from our cloudinary.

## ENV

Make sure to create an `.env` file in the root of the project with the following environment variables:

- `DB_URL=` - With the URL of your database in MongoDB.
- `CLOUDINARY_API_KEY` - Cloudinary api key.
- `CLOUDINARY_API_SECRET` - Cloudinary api secret key.
- `CLOUDINARY_CLOUD_NAME` - Name of the cloud where the images will be uploaded.

> Note: All variables in `CLOUDINARY` are required to configure the cloud.

## Insomnia

The `Insomnia&Postman-Querys.har` file contains all the requests that can be made to our API. In this `.har` format you can import it into Postman.

## Dependencies

- Node.js
- Express
- Dotenv
- Cloudinary
- Multer
- Multer-Storage-Cloudinary

### Dev-Dependencies

- Nodemon

## Contact:

| [**Jesus Elias Alba**](http://instagram.com/jesuseliasalba) |
| :---------------------------------------------------------: |
