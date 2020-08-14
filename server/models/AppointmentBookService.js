const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const appointmentSchema = Schema({
    appointmentsCancelled : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment'
    }],
    appointmentsCompleted : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment'
    }],
    appointmentsActive : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment'
    }],
    prevAppointment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment'
    },
    nextAppointment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Appointment'
    },
    //TODO: ADD more here 
},{timestamps:true})

module.exports = mongoose.model('AppointmentBookService',appointmentSchema)