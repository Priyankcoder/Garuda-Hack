const db = require('../models')

exports.createQuestion = async (req, res, next) =>{
    try {
        const {_id} = req.user
        const user = await db.User.findById(_id)
        
        if(!user) throw new Error('Failed to authenticate')

        const {
            question
        } = req.body

        const ques = new db.Question({
            question,
            status : 'Pending',
            patientAsked : user.patient
        })

        await ques.save()

        const updatedPatient = await db.Patient.findByIdAndUpdate(user.patient,
            {
                "$push" : { "questionsAsked" : ques }
            },
            {new : true}    
        )

        res.status(201).json({
            patient : updatedPatient,
            question : ques
        })

    } catch (error) {
        next({
            message : error.message,
            status: 401
        })
    }
}

exports.getQuestions = async (req, res, next) =>{
    try {
        const questions = await db.Question.find()

        res.status(200).json(
            questions
        )
    } catch (error) {
        next({
            message : error.message,
            status: 401
        })
    }
}

exports.getMyQuestions = async (req, res, next) =>{
    try {
        const {_id} = req.user
        const user = await db.User.findById(_id)

        if(!user) throw new Error('Failed to authenticate')

        await user.populate({
            path : !user.doctor ? 'patient' : 'doctor',
            populate : {
                path : !user.doctor ? 'questionsAsked' : 'questionAnswered',
                model : 'Question'
            }
        }).execPopulate()

        const questions = !user.doctor ? user.patient.questionsAsked : user.doctor.questionAnswered

        res.status(200).json(
            questions
        )
        
    } catch (error) {
        next({
            message : error.message,
            status: 401
        })
    }
}

exports.answerQuestion = async (req, res, next) =>{
    try {
        const {_id} = req.user
        const user = await db.User.findById(_id)

        if(!user) throw new Error('Failed to authenticate')

        const {id} = req.params
        const {
            answer
        } = req.body

        const updatedQuestion = await db.Question.findByIdAndUpdate(id,
            {
                answer,
                status : "Answered",
                doctorAnswered : user.doctor
            },
            {new : true}    
        )

        if(!updatedQuestion) throw new Error('Invalid question ID')

        const updatedDoctor = await db.Doctor.findByIdAndUpdate(user.doctor,
            {
                "$push" : {"questionAnswered" : updatedQuestion}
            },
            {new : true}
        )

        res.status(201).json({
            updatedDoctor,
            updatedQuestion
        })
    } catch (error) {
        next({
            message : error.message,
            status : 401
        })
    }
}