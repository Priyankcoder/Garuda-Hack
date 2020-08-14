const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const qualificationSchema = Schema({
    doctorID : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Doctor'
    },
    qualificationName : String,
    instituteName : String,
    procurementYear : Date,
},{timestamps:true})

module.exports = mongoose.model('Qualification',qualificationSchema)
