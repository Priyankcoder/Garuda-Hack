const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const questionSchema = Schema({
    question : String,
    answer : String,
    status : {
        type : String,
        enum : ['Pending', 'Answered']
    },
    doctorAnswered : {
        type : Schema.Types.ObjectId,
        ref : 'Doctor'
    },
    patientAsked : {
        type : Schema.Types.ObjectId,
        ref : 'Patient'
    },
    // well we can keep comments n all too
},{timestamps : true})

module.exports = mongoose.model('Question', questionSchema)