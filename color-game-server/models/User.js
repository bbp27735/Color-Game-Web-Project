
const mongoose = require('mongoose');

const Stat = require('./Stat.js')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: false,
    },
    stats: {
        numClicks: {
            type: Number,
        }
    } 
})

module.exports = User = mongoose.model('user', UserSchema);
