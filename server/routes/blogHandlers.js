"use strict";
const { v4: uuidv4 } = require("uuid");
const { MongoClient }= require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

//Inserting a blog
const PostBlog = async (req,res)=>{
    const _id = uuidv4();
    const {title,description,photo,username,categories,timestamp} = req.body
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Blogs")
        const User = await db.collection("Users").insertOne({_id,title,description,photo,username,categories,timestamp})
        res.status(200).json({message:"blog posted"})           
    } catch(err) {
    res.status(500).json({message:"Error while posting blog"})
    }}


module.exports={PostBlog}


    