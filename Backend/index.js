const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const morgan = require("morgan");
var bodyParser = require('body-parser');
require("dotenv").config();

mongoose.connect('mongodb://localhost:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connection established");
});

const app = express();
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(express.json())
var index = require('./src/controllers/userSignup');
app.use('/raja', index);

const PORT = process.env.PORT || 3000;
app.listen(PORT,  ()=> {
  console.log('Server is started on port',  PORT);
});