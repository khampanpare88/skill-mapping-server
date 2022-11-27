const skillsModel = require("../models/skillmodel.js");
const getSkills = async (req, res) =>{
  try {
    const skills = await skillsModel.find();
    console.log(skills);
    res.status(200).json(skills);
  } catch (error) {
    res.status(404).json( {message: error.message});
  }
};
module.exports = getSkills;
