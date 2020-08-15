const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = new Schema({
    docID : String,
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
            enum : ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
        },
        isAvailable : Boolean, // available ri8 now
        reasonOfUnavailability : String
    },
    pendingAppointments : [{
        type : Schema.Types.ObjectId,
        ref : 'Appointment'
    }],
    currentWorkingStatus : {
        private : Boolean,
        hospitalName : String
    }
    //TODO: MORE TO ADD
},{timestamps:true})

module.exports = mongoose.model('Doctor',doctorSchema)