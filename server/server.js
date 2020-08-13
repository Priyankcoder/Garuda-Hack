const express = require('express')
const app = express()

const cors = require('cors') 
const bodyParser = require('body-parser')

const {PORT} = require('./config')

// middle-wares
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

// CORS
app.use(cors())

//routes

// error handlers

// listening
app.listen(PORT, ()=>{
    console.log(`magic happens here @${PORT}`);
})