const mongoose = require('mongoose')
const Schema = mongoose.Schema

const qualificationSchema = new Schema({
    doctorID : {
        type : Schema.Types.ObjectId,
        ref : 'Doctor'
    },
    qualificationName : String,
    instituteName : String,
    procurementYear : Date,
},{timestamps:true})

module.exports = mongoose.model('Qualification',qualificationSchema)
