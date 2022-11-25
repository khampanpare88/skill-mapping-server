const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const getSkills = require('./controllers/skills.js');
// import  getSkills  from './controllers/skills.js';



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use('/skills',getSkills);


mongoose.connect('mongodb+srv://project:491@skillmapping.s8p064c.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true })

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5001;
}
app.get('/skills',getSkills);


exports.app = functions.https.onRequest(app);