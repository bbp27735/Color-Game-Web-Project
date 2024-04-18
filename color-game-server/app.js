const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 8084;


app.get('/', (req, res) => res.send('Hello world!'));

const users = require('./routes/api/users');

app.use('/api/users', users);

app.use('/', router);


const conn_str = 'mongodb+srv://bbp27735:8njbLSfBLfuiTooA@userandgame.ldoopoq.mongodb.net/?retryWrites=true&w=majority&appName=UserAndGame';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log("MongoDB Connection Succeeded");
})
.catch(err => {
    console.log(`Error in DB Connection: ${err}`);
})


app.listen(process.env.port || 8804);