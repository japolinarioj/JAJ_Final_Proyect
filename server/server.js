"use strict";
const path = require('path');

const express = require('express');
const morgan = require('morgan');
const PORT = 8000;
const {Connection} = require("./routes/Connection")
const {GetUsers, SignUpUser,SignInUser, GetBlogsByUser}=require("./routes/userHandlers");
const {GetBlogsByCategory,PostBlog,DeleteBlog, UpdateBlog, GetBlogDetails, GetBlogs} = require("./routes/blogHandlers");
const { GetCategories } = require('./routes/CategoriesHandlers');

express()
.use(morgan("tiny"))
.use(express.json())
.use(express.urlencoded({extended:true}))
.use('/assets', express.static(path.join(__dirname, 'assets')))

//Users endpoints
.get('/api/users',GetUsers)
.get('/api/users/:username',GetBlogsByUser)
.post('/api/signup',SignUpUser)
.post('/api/signin',SignInUser)

//Blogs endpoints
.get('/api/blogs',GetBlogs)
.get('/api/blogs/:category', GetBlogsByCategory)
.get('/api/blogs/:categories/:title', GetBlogDetails)
.post('/api/post-blog', PostBlog)
.put('/api/put-blog/:title/:username',UpdateBlog)
.delete('/api/delete-blog/:title/:username', DeleteBlog)

//Categories endpoints
.get('/api/get-categories',GetCategories)


.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})

.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}); 

Connection();