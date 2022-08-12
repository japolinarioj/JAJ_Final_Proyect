"use strict";
const { v4: uuidv4 } = require("uuid");
const { MongoClient }= require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
//Getting blogs by categories
const GetBlogs = async (req,res)=>{
    console.log(req.body)
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Blogs")
        const result = await db.collection("Blogs").find().toArray();
        res.status(200).json({status:200,data:result})           
    } catch(err) {
    res.status(500).json({message:"Error while getting category"})
    }}

//Inserting a blog
const PostBlog = async (req,res)=>{
    const _id = uuidv4();
    const {categories,title,description,username} = req.body
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Blogs")
        const User = await db.collection("Blogs").insertOne({_id,categories,title,description,username})
        res.status(200).json({message:"blog posted"})           
    } catch(err) {
    res.status(500).json({message:"Error while posting blog"})
    }}


module.exports={PostBlog,GetBlogs}


    