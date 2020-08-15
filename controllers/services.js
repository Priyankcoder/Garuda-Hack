const db = require('../models')

exports.covidStatusUpdate = async (req, res, next) => {
    try {
        const {_id} = req.user
        const {result} = req.body
        const user = await db.User.findById(_id)

        if(!user) throw new Error('Invalid User')

        const updatedPatient = await db.Patient.findByIdAndUpdate({_id : user.patient},
            {
                covidStatus : {
                    result,
                    testTaken : true
                }
            },{new : true}
        )
        
        res.status(201).json({
            patient : updatedPatient
        })

        return next()
    } catch (error) {
        next({
            message : error.message,
            status : 400
        })
    }
}