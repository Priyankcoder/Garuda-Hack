const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    patientID : {
        type : Schema.Types.ObjectId,
        ref : 'Patient'
    },
    doctorID : {
        type : Schema.Types.ObjectId,
        ref : 'Doctor'
    },
    probableStartTime : Date,
    actualEndTime : Date,
    appointmentStatusID : {
        type : String,
        default:'Active',
        enum : ['Cancelled, Active, Completed']
    }
},{timestamps:true})

module.exports = mongoose.model('Appointment',appointmentSchema)
