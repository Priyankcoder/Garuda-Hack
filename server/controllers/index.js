module.exports = {
    ...require('./auth'),
    ...require('./services')
}

module.exports.notFound = (req, res, next) =>{
    const error = new Error('Page not Found')
    error.status = 404

    next(error)
}

module.exports.errors = (err, req, res, next) =>{
    res.locals.error = err

    const status = err.status || 500
    return res.status(status).json({
        success: false,
        error:{
            message: err.message || 'Something went wrong'
        }
    })
}