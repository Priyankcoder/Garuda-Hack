const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const reminderSchema = Schema({
    text : String,
    checkUpDate : Date,
    daysLeft : Number,
    covid_since : Date,
    priority : {
        type : String,
        enum : ['HIGH', 'MEDIUM', 'LOW']
    }
    // ADD more stuff
},{timestamps:true})

module.exports = mongoose.model('ReminderService',reminderSchema)
