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
        type : Schema.Types.ObjectId,
        ref : 'Question'
    }],
    availability : {
        whenAvailable:{
            type : [String],
            default: ['Mon'], // Monday all are available
            enum : ['Mon', 'Tues', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
        },
        isAvailable : Boolean, // available ri8 now
        reasonOfUnavailability : String
    },
    pendingAppointment : {
        type : Schema.Types.ObjectId,
        ref : 'Appointment'
    },
    currentWorkingStatus : {
        private : Boolean,
        hospitalName : String
    }
    //TODO: MORE TO ADD
},{timestamps:true})

module.exports = mongoose.model('Doctor',doctorSchema)