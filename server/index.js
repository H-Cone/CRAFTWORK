const express = require('express')
const app = express();
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
require('dotenv').config()
const cors = require('cors')
const authRoute = require('./routes/auth.route');
const projectRoute = require('./routes/projects.route')
const proposalRoute = require('./routes/proposal.route');

PORT = process.env.PORT_NUM
DBURI = process.env.MongoDB_URI

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/auth', authRoute)
app.use('/projects', projectRoute)
app.use('/proposal', proposalRoute)




mongoose.connect(DBURI).then(()=> {
    console.log("Connected:)");
}).catch((err)=> {
    console.log(err);
})


app.listen(PORT, (req, res)=> {
    console.log(`I am working:)`);
})