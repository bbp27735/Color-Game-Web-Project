const express = require('express');
var bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
// const userRouter = express.Router();
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");


const Stat = require('../../models/Stat');

router.put('/:id', bodyParser.json(), (req, res) => {
    Stat.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => res.json({ msg: 'Updated user successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to update the Databse' }));
});

router.put('/', (req, res) => {
    res.json({error: "No ID was supplied. What item should be updated?"})
 });


 // IF THE DELETE ROUTE MUST REQUIRE AUTHENTICATION, we can add a second parameter here
 // Therefore, it will go through the auth before proceeding
 // In this example, you can't delete a user without passing conditions within the authorization middleware
 router.delete('/:id', (req, res) => {
    Stat.findByIdAndDelete(req.params.id)
        .then((user) => {res.json({ msg: "Item was deleted successfully."})})
        .catch((err) => res.status(404).json({ error: "No such item exists."}));
});

router.get('/', (req, res) => {
    Stat.find()
    .then((stats) => res.json(stats))
    .catch((err) => res.status(404).json({ noitemsfound: "No items found."}));
});

router.post('/', bodyParser.json(), (req, res) => {
    Stat.create(req.body)
    .then((user) => res.json({ msg: 'Stat added successfully!'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add this item' + err}));
})

router.get('/:id', (req, res) => {
    Stat.findById(req.params.id)
    .then((user) => {res.json(user)})
    .catch((err) => res.status(404).json({ noitemfound: "No user found." }));
});

module.exports = router;