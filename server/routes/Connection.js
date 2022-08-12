const {MongoClient} = require("mongodb");

require("dotenv").config();
const {MONGO_URI} = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

const Connection = async ()=>{
    // Next line creates a new client
    const client = new MongoClient(MONGO_URI, options);
    try{
        //connecting to the client
        await client.connect();
        console.log("connected!")
    } catch (error) {
        console.log("error")
    }
        // closing the connection to the database
        client.close();
        console.log("disconnected!")
    }
;

module.exports = { Connection };