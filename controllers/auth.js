const shortid = require('shortid')

const db = require('../models')

exports.registerPatient = async (req, res, next) =>{
    try {
        const userType = 'Patient'
        const {
            firstName,
            lastName,
            userName,
            password,
            contactNumber,
            email,
            city, address
        } = req.body

        const patient = new db.Patient({
            firstName,
            lastName,
            contactNumber,
            email,
            location : {
                city,
                address
            }
        })

        const user = new db.User({
            name : userName,
            password,
            email,
            userType,
            patient
        })

        // saving user in db
        await patient.save()
        await user.save()

        res.status(201).json({
            userType,
            message : 'You have been registered, go LOGIN yourself'
        })

        return next()

    } catch (error) {
        next({
            status:401,
            message:error.message
        })  
    }
}

exports.registerDoctor = async (req, res, next) =>{
    try {
        const userType = 'Doctor'
        const docID = `DOC-${shortid.generate()}`
        const {
            firstName,
            lastName,
            userName,
            password,
            contactNumber,
            email,
            professionalStatement,
            practicingFrom,
            whenAvailable,
            reasonOfUnavailability,
            private,
            hospitalName
        } = req.body

        const doctor = new db.Doctor({
            docID,
            firstName,
            lastName,
            contactNumber,
            email,
            professionalStatement,
            practicingFrom,
            currentWorkingStatus : {
                private,
                hospitalName
            },
            availability : {
                whenAvailable,
                reasonOfUnavailability
            },
        })

        const user = new db.User({
            name : userName,
            password,
            email,
            userType,
            doctor
        })

        // saving user in db
        await doctor.save()
        await user.save()

        res.status(201).json({
            userType,
            message : 'You have been registered, go LOGIN yourself'
        })

        return next()

    } catch (error) {
        next({
            status:401,
            message:error.message
        })  
    }
}

exports.login = async (req, res, next) =>{
    try {
        const user = await db.User.findByCreds(req.body, next)

        if(!user) throw new Error('Credentials aren\'t matching')

        const token = await user.generateToken()

        await user.populate(user.userType.toLowerCase()).execPopulate()

        res.status(200).json({
            token,
            ...user._doc
        })

        return next()

    } catch (error) {
        next({
            status:401,
            message:error.message
        })  
    }
}
