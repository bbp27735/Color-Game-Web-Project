require('dotenv').config();
const express = require('express');
var bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
// const router = express.Router();
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");


const User = require('../../models/User');

userRouter.put('/:id', bodyParser.json(), (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => res.json({user: {id: user._id, username: user.username, email: user.email, image: user.image }}))//res.json({ msg: 'Updated user successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to update the Databse' }));
});

userRouter.put('/', (req, res) => {
    res.json({error: "No ID was supplied. What item should be updated?"})
 });


 userRouter.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id, req.body)
        .then((user) => {res.json({ msg: "Item was deleted successfully."})})
        .catch((err) => res.status(404).json({ error: "No such item exists."}));
});



userRouter.get('/', (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ noitemsfound: "No items found."}));
});

userRouter.put("/current", bodyParser.json(), async(req, res) => {
    console.log("/current called to change pfp")
    try {
        
        let workingChange = await User.findOneAndUpdate( 
                {"email": {email} }, 
                { $set: { "image": {image} }},
                { sort: {returnNewDocument: true}},
        ).then((user) => {res.json(workingChange)})
        /*
        console.log("Updated the profile pic.");
        res.json(workingChange)
        */
        } catch (err) {
            console.log("Error caught: " + err.message);
            res.status(500).json({error: err.message});
        }
})

userRouter.post('/', bodyParser.json(), (req, res) => {
    User.create(req.body)
    .then((user) => res.json({ msg: 'User added successfully!'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add this item' + err}));
})

userRouter.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((user) => {res.json(user)})
    .catch((err) => res.status(404).json({ noitemfound: "No user found." }));
});


userRouter.post("/signup", bodyParser.json(), async(req, res) => {
    try {
        console.log("trying signup")
        const { email, password, username, image } = req.body;
        if (!email || !password || !username || !image) {
            return res.status(400).json({msg: "Please enter all the fields."})
        }
        console.log("past checking for blanks")
        if (password.length < 6) {
            return res.status(400).json({msg: "Password must be more than 6 chars"})
        }
        console.log("checking for existing user for email")
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists with the email: " + existingUser.email)
            return res.status(400).json({msg: "User already exists with that email."})
        }
        console.log("checking for existing user for username")
        existingUser = await User.findOne({ username });
        if (existingUser) {
            console.log("User already exists with the username: " + existingUser.username)
            return res.status(400).json({msg: "User already exists with that username."})
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({email, password: hashedPassword, username, image});
        console.log("trying to save user")
        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message})
        console.log("Error caught: " + err.message)
    }
});

// Login route
userRouter.post("/login", bodyParser.json(), async(req, res) => {
    console.log("Login accessed");
    try {
        console.log("Request email: " + req.body.email);
        const {email, password } = req.body;
        console.log("Request body formed into variable.");
        if(!email || !password) {
            return res.status(400).json({msg: "Please enter all fields."});
        }
        console.log("Fields missing for login");
        const user = await User.findOne({email});
        if (!user) {
            console.log("User does not exist with the email: " + email)
            return res.status(400).send({msg: "User with this email address does not exist."});
        }
        console.log("Awaiting match.");
        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            console.log("Incorrect password entered.");
            return res.status(400).send({msg: "Incorrect Password"});
        }
        console.log("Attempting to make JWT Web Token")
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        console.log("Token: " + token);
        console.log("User: " + user);
        res.json({ token, user: {id: user._id, username: user.username, email: user.email, image: user.image } });
        console.log("Login succeeded.");
    } catch (err) {
        console.log("Error caught: " + err.message)
        res.status(500).json({error: err.message});
    }
});

// Need the login token valid checker
userRouter.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("Authorization");
        if (!token) return res.json(false);
        const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        if (!verified) return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
     res.status(500).json({error: err.message });
    }
    });

module.exports = userRouter;