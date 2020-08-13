const express = require('express')
const app = express()

const cors = require('cors') 
const bodyParser = require('body-parser')
const error = require('./controllers')

const {PORT} = require('./config')

// DB connection
require('./db')

// middle-wares
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

// CORS
app.use(cors())

//routes

// error handlers
app.use(error.notFound)
app.use(error.errors)

// listening
app.listen(PORT, ()=>{
    console.log(`magic happens here @${PORT}`);
})