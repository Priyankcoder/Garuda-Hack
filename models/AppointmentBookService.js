const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema({
    appointmentsCancelled : [{
        type : Schema.Types.ObjectId,
        ref : 'Appointment'
    }],
    appointmentsCompleted : [{
        type : Schema.Types.ObjectId,
        ref : 'Appointment'
    }],
    appointmentsActive : [{
        type : Schema.Types.ObjectId,
        ref : 'Appointment'
    }],
    prevAppointment : {
        type : Schema.Types.ObjectId,
        ref : 'Appointment'
    },
    nextAppointment : {
        type : Schema.Types.ObjectId,
        ref : 'Appointment'
    },
    //TODO: ADD more here 
},{timestamps:true})

module.exports = mongoose.model('AppointmentBookService',appointmentSchema)