// import CoursesModel from '../models/coursesmodel.js';
const coursesModel = require('../models/coursesmodel.js');

module.exports = getCourses = async (req,res) =>{
    try{
        const courses = await coursesModel.find();
        res.status(200).json(courses);
    } catch(error){
        res.status(404).json( {message: error.message });
    }
};