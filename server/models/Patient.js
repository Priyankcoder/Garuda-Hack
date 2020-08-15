const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
    firstName : String,
    lastName : String,
    contactNumber : Number,
    email : String,
    location:{
        address : String,
        city : String,
    },
    covidStatus : {
        testTaken : Boolean,
        result : {
            type : Boolean,
            default : false
        }
    },
    questionsAsked : [{
        type : Schema.Types.ObjectId,
        ref : 'Question'
    }],
    services : {
        type : Schema.Types.ObjectId,
        ref : 'Service'
    }
},{timestamps:true})

module.exports = mongoose.model('Patient',patientSchema)
