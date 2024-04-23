const mongoose = require('mongoose');


// we create a file for each model



const StatSchema = new mongoose.Schema({
    numClicks: {
        type: int,
        required: true,
    },
    blueTeamJoined: {
        type: int,
    },
    redTeamJoined: {
        type: int,
    },
    chatsSent: {
        type: int,
    },
})

module.exports = Stat = mongoose.model('stat', StatSchema);