const express = require('express')
const app = express();
const mongoose = require('mongoose')
require('dotenv').config()

PORT = process.env.PORT_NUM
DBURI = process.env.MongoDB_URI






mongoose.connect(DBURI).then(()=> {
    console.log("Connected:)");
}).catch((err)=> {
    console.log(err);
})


app.listen(PORT, (req, res)=> {
    console.log(`I am working:)`);
})