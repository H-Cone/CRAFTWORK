const express = require('express')
const proposalRoute = express.Router()

proposalRoute.post('/', (req, res)=> {
    res.status(200).json({message: "Working"})
})

module.exports = proposalRoute