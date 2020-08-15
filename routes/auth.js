const router = require('express').Router()

const control = require('../controllers')

// register routes
router.post('/register-patient', control.registerPatient)
router.post('/register-doctor', control.registerDoctor)

// login routes
router.post('/login', control.login)
// router.post('/login-doctor', control.loginDoctor)

// leave that forgot pass and reset pass for now
module.exports = router