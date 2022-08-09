const {Users, Blogs, Categories} = require("./data.js");
const { MongoClient }= require("mongodb");
require ("dotenv").config();
const {MONGO_URI} = process.env;

const options = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
};

const batchImport = async () =>{
    const client = new MongoClient(MONGO_URI,options);
    console.log(Categories)

    try {
        await client.connect();
        const db = client.db("Blogs");
        const users = await db.collection("Users").insertMany(Users);
        const blogs = await db.collection("Blogs").insertMany(Blogs);
        const categories = await db.collection("Categories").insertMany(Categories);

    } catch (err) {
        console.log(err.stack)
        res.status(500).json({status:500,data:req.body,message:err.message})
    } 
    client.close()

}
batchImport();