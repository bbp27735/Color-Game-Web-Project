const mongoose = require('mongoose');


// we create a file for each model


const StatSchema = new mongoose.Schema({
    numClicks: {
        type: 'Number',
        required: true,
    },
    blueTeamJoined: {
        type: 'Number',
    },
    redTeamJoined: {
        type: 'Number',
    },
    chatsSent: {
        type: 'Number',
    },
})

module.exports = Stat = mongoose.model('stat', StatSchema);