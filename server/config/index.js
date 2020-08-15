require('dotenv').config()

module.exports = {
    PORT : process.env.PORT,
    DB   : process.env.MONGO_URL,
    SECRET_JWT : process.env.SECRET_JWT
}