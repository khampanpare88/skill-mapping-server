// import CoursesModel from '../models/coursesmodel.js';
const CoursesModel = require("../models/coursesmodel.js");
const mongoose = require("mongoose");
const UpdateorNew = async (req, res) =>{
  const {id, seltopic, skills, isSelTopic} = req.body;
  if ( isSelTopic == true /* เป็นseltopic*/) {
    if (id == "6335309e1145d8b493deb6a3" ) {
      const courses = new CoursesModel( {id: "261498",
        name: "Selected Topics in Computer Networks", seltopic, skills});
      try {
        await courses.save();
        res.status(201).json(courses);
      } catch (error) {
        res.status(409).json({message: error.message});
      }
    } else if (id == "633531851145d8b493deb6a4" ) {
      const courses = new CoursesModel({id: "261497",
        name: "Selected Topics in Computer Software", seltopic, skills});
      try {
        await courses.save();
        res.status(201).json(courses);
      } catch (error) {
        res.status(409).json({message: error.message});
      }
    }
  } else {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No post with id: ${id}`);
    }
    const updatedCoursesSkill = {skills};
    await CoursesModel.findByIdAndUpdate(id,
        updatedCoursesSkill, {new: true});
    res.json(updatedCoursesSkill);
  }
};
module.exports = UpdateorNew;
