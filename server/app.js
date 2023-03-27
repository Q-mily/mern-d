const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// Database

mongoose.connect('mongodb://mongo:27017/docker-demo');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        default: ""
    },
    age: {
        type: String,
        default: ""
    },
    isDelete: {
        type: Boolean,
        default: false
    }
})
const User = mongoose.model('user', UserSchema);
// Database - end

// Server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res,next) => { res.send("Hello")})
app.get('/user' , async (req, res, next) => {
    const docs = await User.find();
    res.json({
        status: 200,
        datas: docs
    })
});
app.post('/user', async(req, res, next) =>{
    const {name, age} = req.body;
    const doc = new User({name, age});

    await doc.save();
    res.json({
        status: 201,
        message: "User created",
        data: doc
    })
})

app.listen(7500, (req, res) =>{
    console.log('app run 7500');
})