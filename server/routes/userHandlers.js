"use strict";
const { v4: uuidv4 } = require("uuid");
const { MongoClient }= require("mongodb");
require("dotenv").config();
const {MONGO_URI} = process.env;
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

//Sign-up users
const SignUpUser = async (req,res)=>{
    const _id = uuidv4();
    const {username,email,password,picture,timestamp} = req.body
    const client = new MongoClient(MONGO_URI,options)
    try{ 
        await client.connect();
        const db = client.db("Blogs")
        const User = await db.collection("Users").insertOne({_id,username,email,password,picture,timestamp})
        res.status(200).json({message:"signup successful"})           
    } catch(err) {
    res.status(500).json({message:"Error while sign up user"})
    } finally{
    client.close()}
}

// Sign in user
const SignInUser = async (req,res)=>{
    let currentUser = req.body.username;
    const client= new MongoClient(MONGO_URI,options)
    try{
        await client.connect();
        const db = client.db("Blogs")
        const result =await db.collection("Users").findOne({currentUser});
        result
        ? res.status(200).json({
            status:200,
            message:currentUser.username + "is connected",
            data: result,
            })
        : res.status(404).json({message:"User Not Found"})
    } catch(err) {
        res.status(500).json({message:"Error while sign up user"})
    } 
    client.close()
}
    
    


    // Sign-in user
    // .get



    module.exports ={
        SignUpUser,
        SignInUser,
    }