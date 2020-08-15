const jwt = require('jsonwebtoken')

const {SECRET_JWT} = require('../config')

module.exports = (req, res, next) => {
    try {
        if(req.headers['authorization']){
            const token = req.headers['authorization'].split(' ')[1]
            const user = jwt.verify(token, SECRET_JWT)

            if(!user) throw new Error('Account Verification Failed')

            req.user = user

            return next()
        }else{
            throw new Error('Account Verification Failed')
        }
    } catch (error) {
        next({
            message : error.message,
            status : 401
        })
    }
}