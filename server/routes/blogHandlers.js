"use strict";
const { v4: uuidv4 } = require("uuid");
const { MongoClient }= require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};
//Get all blogs
const GetBlogs = async (req,res)=>{
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Econtalks")
            const result = await db.collection("Blogs").find().toArray()
            res.status(200).json({status:200,data:result})           
             
    } catch(err) {
    res.status(500).json({message:"Error while getting blogs"})
    }}


//Getting blogs by categories
const GetBlogsByCategory = async (req,res)=>{
    const {category} = req.params
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Econtalks")
        if(category==='All'){
            const result = await db.collection("Blogs").find().toArray()
            res.status(200).json({status:200,data:result})           
        } else {
            const result = await db.collection("Blogs").find({categories:category}).toArray()
            res.status(200).json({status:200,data:result})}          
    } catch(err) {
    res.status(500).json({message:"Error while getting category"})
    }}

//Getting blogs by categories and _id
const GetBlogDetails = async (req,res)=>{
    const {categories,title}= req.params
    console.log(req.params)
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Econtalks")
        const result = await db.collection("Blogs").findOne({categories:categories, title:title})
            res.status(200).json({status:200, data:result})
            console.log(result)       
    } catch(err) {
    res.status(500).json({message:"Error while getting category"})
    }}



//Inserting a blog
const PostBlog = async (req,res)=>{
    const _id = uuidv4();
    const date = new Date();
    const timeStamp = new Intl.DateTimeFormat('en-US',{dateStyle:'long'}).format(date);
    const {categories,title,description,username} = req.body
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Econtalks")
        await db.collection("Blogs").insertOne({_id,categories,title,description,username,timeStamp})
        res.status(200).json({message:"blog posted"})           
    } catch(err) {
    res.status(500).json({message:"Error while posting blog"})
    }}

const DeleteBlog = async(req,res)=>{
    const {title,username} = req.params
    console.log(req.params)
    const client =new MongoClient(MONGO_URI,options)
    try{
        await client.connect();
        const db = client.db("Econtalks")
        let result= await db.collection("Blogs").findOne({title:title,username:username })
        if(result){
            console.log(result)
            await db.collection("Blogs").deleteOne({title:title,username:username})
        }
    } catch(err) {
        res.status(500).json({message:"Error while deleting blog"})
    }
}
const UpdateBlog = async(req,res)=>{
    const {categories,title,description,username,timeStamp} = req.body
    const client =new MongoClient(MONGO_URI,options)
    try{
        await client.connect();
        const db = client.db("Econtalks")
        let result= await db.collection("Blogs").findOne({title:title,username:username })
        if(result){
            console.log(result)
        }
    } catch(err) {
        res.status(500).json({message:"Error while deleting blog"})
    }
}
module.exports={PostBlog,GetBlogs,GetBlogsByCategory, DeleteBlog, UpdateBlog, GetBlogDetails}


    