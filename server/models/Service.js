const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const serviceSchema = Schema({
    patientID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient'
    },
    servicesTaken : {
        type : [String],
        enum : ['TRANS', 'REMIND', 'APPOINT']
    },
    servicesApplicable : {
        transferService : {
            type : Schema.Types.ObjectId,
            ref : 'TransferService'
        },
        reminderService : {
            type : Schema.Types.ObjectId,
            ref : 'ReminderService'
        },
        appointmentBookService : {
            type : Schema.Types.ObjectId,
            ref : 'AppointmentBookService'
        }
    },
    premiumMember : {
        type : Boolean,
        default : false
    }
},{timestamps:true})

module.exports = mongoose.model('Service',serviceSchema)
