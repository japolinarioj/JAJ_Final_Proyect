"use strict";
const {Categories} = require ("../data");

//Getting a category
const GetCategories = async (req,res)=>{
    res.status(200).json({status:200, data:Categories, message:"success"})

}
module.exports={GetCategories}