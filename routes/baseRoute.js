const express = require('express')
const route  = express.Router()

route.get("/", (req, res, next)=>{
    res.send("<h1>Hello this is the little client !!!</h1>")
})

module.exports = route