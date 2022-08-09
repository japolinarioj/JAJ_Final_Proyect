"use strict";
const express = require('express');
const morgan = require('morgan');
const PORT = 8000;
const {MongoClient}=require("mongodb")
require("dotenv").config();
const{MONGO_URI} = process.env
const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

const Connection = async (Blogs) =>{
    const client = new MongoClient(MONGO_URI,options);
    try {
    await client.connect();
    const db=client.db(Blogs)
    console.log("connected")


}catch(err){
    console.log(err.stack)
}
client.close
console.log("disconnected")
};
Connection();

express()
.use(morgan("tiny"))
.use(express.json())

.get('/', (req, res) => {
  res.status(200).json({status:200 , message:'Hello World!'})
})
.get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})

.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}); 