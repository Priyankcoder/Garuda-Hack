const router = require('express').Router()

const control = require('../controllers')
const auth = require('../middleware/auth')

// these are apis for creating a question and showing all question
router.route('/')
    .post(auth, control.createQuestion)
    .get(control.getQuestions)

// getting current patient/doctor questionsAsked/questionsAnswered    
router.get('/me', auth, control.getMyQuestions)

router.route('/:id')
    .post(auth, control.answerQuestion)
//     .get(control.getQuestion)
//     .put(control.updateQuestion)
//     .delete(control.deleteQuestion)

module.exports = router