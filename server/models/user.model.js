const {model, Schema} = require('mongoose')

const userSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        minlength: 6
    }
})

module.exports = model('users', userSchema)