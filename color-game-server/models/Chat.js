const mongoose = require('mongoose');


// we create a file for each model



const ChatSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    chatContent: {
        type: String,
    },
    image: {
        type: String,
    },
    updated_date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = Message = mongoose.model('chat', ChatSchema);
// mongoose.model compiles the model, which we are referring to as Item
// We can invoke our database methods on Item
// First argument 'item' is the sigular name of the collection
// So, even though our file is named items, the singular version is item, the name of the collection
// so, we refer to our mongoose element here as Item