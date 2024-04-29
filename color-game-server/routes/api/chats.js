const express = require('express');
var bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const chatRouter = express.Router();
// const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const Chat = require('../../models/Chat');

chatRouter.put('/:id', bodyParser.json(), (req, res) => {
    Chat.findByIdAndUpdate(req.params.id, req.body)
        .then((chat) => res.json({ msg: 'Updated chat successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to update the Databse' }));
});

chatRouter.put('/', (req, res) => {
    res.json({error: "No ID was supplied. What item should be updated?"})
 });


 // IF THE DELETE ROUTE MUST REQUIRE AUTHENTICATION, we can add a second parameter here
 // Therefore, it will go through the auth before proceeding
 // In this example, you can't delete a chat without passing conditions within the authorization middleware
 chatRouter.delete('/:id', (req, res) => {
    Chat.findByIdAndDelete(req.params.id)
        .then((chat) => {res.json({ msg: "Item was deleted successfully."})})
        .catch((err) => res.status(404).json({ error: "No such item exists."}));
});

chatRouter.get('/', (req, res) => {
    Chat.find()
    .then((chats) => res.json(chats))
    .catch((err) => res.status(404).json({ noitemsfound: "No items found."}));
});

chatRouter.post('/add', bodyParser.json(), async(req, res) => {
    console.log("Trying chatrouter /add")
    try {
        const { username, chatContent, image } = req.body;
        console.log("Created a variable object")
        if (!username || !chatContent || !image) {
            return res.status(400).json({msg: "Please enter all the fields."})
        }
        const newChat = new Chat({username, chatContent, image});
        console.log("Created a new chat")
        const savedChat = await newChat.save();
        console.log("Saved a new chat")
        res.json(savedChat);
    } catch (err) {
        console.log(err.message)
        res.status(500).json({error: err.message});
    }

    //Chat.create(req.body)
    //.then((chat) => res.json({ msg: 'Chat added successfully!'}))
    // .catch((err) => res.status(400).json({ error: 'Unable to add this item' + err}));
})

chatRouter.get('/:id', (req, res) => {
    Chat.findById(req.params.id)
    .then((chat) => {res.json(chat)})
    .catch((err) => res.status(404).json({ noitemfound: "No chat found." }));
});

module.exports = chatRouter;