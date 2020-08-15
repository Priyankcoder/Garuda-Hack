const router = require('express')()

const auth = require('../middleware/auth')
const control = require('../controllers')

// COVID status
router.put('/covid-status', auth, control.covidStatusUpdate)

module.exports = router