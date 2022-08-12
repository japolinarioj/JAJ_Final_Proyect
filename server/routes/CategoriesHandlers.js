"use strict";
const { MongoClient }= require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

//Getting a category
const GetCategories = async (req,res)=>{
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Blogs")
        const result = await db.collection("Categories").find().toArray();
        res.status(200).json({status:200,data:result})           
    } catch(err) {
    res.status(500).json({message:"Error while getting category"})
    }}


module.exports={GetCategories}