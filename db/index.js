const mongoose = require('mongoose')

const {DB} = require('../config')

mongoose.set('debug', true)
mongoose.Promise = global.Promise

mongoose.connect(DB,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
},()=>{
    console.log('DB connected!!');
})