const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const db = require('../models')
const {SECRET_JWT} = require('../config')

const userSchema = new mongoose.Schema({
    name : {
        type:String,
        trim:true
    },
    email : {
        type:String,
        trim:true
    },
    password : String,
    userType: {
        type : String,
        default : 'Patient',
        enum : ['Patient', 'Doctor']
    },
    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient',
        default : null
    },
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Doctor',
        default : null
    }
},{timestamps:true})

//HASH before you save
userSchema.pre('save', async function(next){
    try {
        const user = this
        
        if (!user.isModified('password')) {
            return next()
        }
        
        const hashed = await bcrypt.hash(user.password, 10)
        user.password = hashed

        return next()
    } catch (err) {
        return next({
            status: 400, 
            message: err.message 
        })
    }
})

// Schema methods
userSchema.methods.generateToken = function(){
    const user = this

    const {
        _id,
        name
    } = user

    const payload = {_id, name}

    const token = jwt.sign(payload, SECRET_JWT, {
        algorithm : 'HS512',
        expiresIn : 3600 * 24 // 1 DAY
    })

    return token
}

// Static methods
userSchema.statics.findByCreds = async function({email, password}, next){
    try {
        const user = await db.User.findOne({email})

        if(!user) throw new Error('User with this email not exists')

        const isValid = await bcrypt.compare(password, user.password)

        if(!isValid) throw new Error('Password\'s Incorrect')

        return user

    } catch (error) {
        return next({
            status: 400, 
            message: error.message 
        })
    }
}

module.exports = mongoose.model('User', userSchema)