// import SkillsModel from '../models/skillmodel.js';
const SkillsModel = require("../models/skillmodel.js");
const newSkill = async (req, res) =>{
  const {name, des, levels} = req.body;
  const Skill = new SkillsModel({name, des, levels});
  console.log(req.body);
  try {
    await Skill.save();
    res.status(201).json(Skill);
  } catch (error) {
    res.status(409).json({message: error.message});
  }
};
module.exports = newSkill;
