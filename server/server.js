"use strict";
const express = require('express');
const morgan = require('morgan');
const PORT = 8000;
const {Connection} = require("./routes/Connection")
const {SignUpUser,SignInUser}=require("./routes/userHandlers");
const {GetBlogs,PostBlog} = require("./routes/blogHandlers");
const { urlencoded } = require('express');
const { GetCategories } = require('./routes/CategoriesHandlers');

express()
.use(morgan("tiny"))
.use(express.json())
.use(express.urlencoded({extended:true}))
.use(express.static('public'))

//Users endpoints
.get('/', (req, res) => {res.status(200).json({status:200 , message:'Hello World!'})})
.post('/api/signup',SignUpUser)
.post('/api/signin',SignInUser)

//Blogs endpoints
.get('/api/get-blogs', GetBlogs)
.post('/api/post-blog', PostBlog)

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