const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const patientSchema = Schema({
    firstName : String,
    lastName : String,
    contactNumber : Number,
    email : String,
    covidStatus : {
        type : Boolean,
        default : false
    },
    questionsAsked : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question'
    }],  
},{timestamps:true})

module.exports = mongoose.model('Patient',patientSchema)
