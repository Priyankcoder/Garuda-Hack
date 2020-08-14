const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const transferSchema = Schema({
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
