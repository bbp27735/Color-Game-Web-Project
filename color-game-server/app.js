require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 8084;
const cors = require('cors');

app.use(cors({origin: true, credentials: true}));


app.get('/', (req, res) => res.send('Hello world!'));

const users = require('./routes/api/users');

const chats = require('./routes/api/chats');

const stats = require('./routes/api/stats');

app.use('/api/users', users);

app.use('/api/chats', chats);

app.use('/api/stats', stats);

app.use('/', router);

console.log('app.use running'); 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


const conn_str = 'mongodb+srv://genericuser:X3bFqyQ6npupzB5I@userandgame.ldoopoq.mongodb.net/?retryWrites=true&w=majority&appName=UserAndGame';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log("MongoDB Connection Succeeded");
})
.catch(err => {
    console.log(`Error in DB Connection: ${err}`);
})


app.listen(process.env.port || 8804);