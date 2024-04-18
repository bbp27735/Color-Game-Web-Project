
const mongoose = require('mongoose');

const Stat = require('./Stat.js')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    },
    stats: {
        type: Stat,
    } 
})

module.exports = User = mongoose.model('user', UserSchema);
