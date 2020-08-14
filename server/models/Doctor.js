const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const doctorSchema = Schema({
    docID : Number,
    firstName : String,
    lastName : String,
    email : String,
    contactNumber : Number,
    professionalStatement : String,
    practicingFrom : Date,
    questionAnswered : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question'
    }],
    availability : {
        whenAvailable:{
            type : [String],
            default: ['Mon'], // Monday all are available
            enum : ['Mon', 'Tues', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
        },
        isAvailable : Boolean,
        reasonOfUnavailability : String
    }
},{timestamps:true})

module.exports = mongoose.model('Doctor',doctorSchema)