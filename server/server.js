const express = require('express')
const app = express()

const cors = require('cors') 
const bodyParser = require('body-parser')
const error = require('./controllers')
const routes = require('./routes')

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
app.use('/api/auth', routes.auth)
app.use('/api/service', routes.services)

// error handlers
app.use(error.notFound)
app.use(error.errors)

// listening
app.listen(PORT, ()=>{
    console.log(`magic happens here @${PORT}`);
})