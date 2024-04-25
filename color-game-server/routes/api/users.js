const express = require('express');
var bodyParser = require("body-parser");
const bcryptjs = require("bcryptjs");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");


const User = require('../../models/User');

router.put('/:id', bodyParser.json(), (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then((user) => res.json({ msg: 'Updated user successfully' }))
        .catch((err) => res.status(400).json({ error: 'Unable to update the Databse' }));
});

router.put('/', (req, res) => {
    res.json({error: "No ID was supplied. What item should be updated?"})
 });


 // IF THE DELETE ROUTE MUST REQUIRE AUTHENTICATION, we can add a second parameter here
 // Therefore, it will go through the auth before proceeding
 // In this example, you can't delete a user without passing conditions within the authorization middleware
 /*
 router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((user) => {res.json({ msg: "Item was deleted successfully."})})
        .catch((err) => res.status(404).json({ error: "No such item exists."}));
});
*/

// delete code for an auth token


 router.delete('/:id', auth, (req, res) => {
    er.findByIdAndDelete(req.params.id, req.body)
        .then((user) => {res.json({ msg: "Item was deleted successfully."})})
        .catch((err) => res.status(404).json({ error: "No such item exists."}));
});



router.get('/', (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(404).json({ noitemsfound: "No items found."}));
});

router.post('/', bodyParser.json(), (req, res) => {
    User.create(req.body)
    .then((user) => res.json({ msg: 'User added successfully!'}))
    .catch((err) => res.status(400).json({ error: 'Unable to add this item' + err}));
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then((user) => {res.json(user)})
    .catch((err) => res.status(404).json({ noitemfound: "No user found." }));
});


router.post("/signup", bodyParser.json(), async(req, res) => {
    try {
        const { email, password, username, image } = req.body;
        if (!email || !password || !username || !image) {
            return res.status(400).json({msg: "Please enter all the fields."})
        }
        if (password.length < 6) {
            return res.status(400).json({msg: "Password must be more than 6 chars"})
        }
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({msg: "User already exists with that email."})
        }
        existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({msg: "User already exists with that username."})
        }
        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User({email, password: hashedPassword, username, image});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
});

// Login route
router.post("/login", async (req, res) => {
    try {
        const {email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({msg: "Please enter all fields."});
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).send({msg: "User with this email address does not exist."});
        }
        const isMatch = await bcryptjs.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send({msg: "Incorrect Password"});
        }
        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET);
        res.json({ token, user: {id: user._id, username: user.username } });

    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

// Need the login token valid checker
router.post("/tokenIsValid", async (req, res) => {
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

module.exports = router;