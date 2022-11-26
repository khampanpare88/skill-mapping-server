const functions = require("firebase-functions");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const getSkills = require("./controllers/getSkills.js");
const newSkill = require("./controllers/newSkill.js");
const getCourses = require("./controllers/getCourses.js");
const UpdateorNew = require("./controllers/UpdateorNew.js");
const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(cors());
mongoose.connect("mongodb+srv://project:491@skillmapping.s8p064c.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5001;
}
app.get("/getskills", getSkills);
app.post("/newskill", newSkill);
app.get("/getcourses", getCourses);
app.post("/updateornew", UpdateorNew);
exports.app = functions.https.onRequest(app);
