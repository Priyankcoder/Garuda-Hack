const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transferSchema = new Schema({
    patientsRegistered:[{
        type : Schema.Types.ObjectId,
        ref : 'Patient'
    }],
    patientAddress : {
        address : String,
        city : String,
        state : String
    },
    nearByHospitalAddress : {
        address : String,
        city : String,
        state : String
    },
    // more information to be added
},{timestamps:true})

module.exports = mongoose.model('TransferService',transferSchema)
