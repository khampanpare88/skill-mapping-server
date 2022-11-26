// import SkillsModel from '../models/skillmodel.js';
const skillsModel = require('../models/skillmodel.js');

module.exports = newSkill = async (req,res) =>{
    const { name ,des ,levels } = req.body;
    const SkillModel = new skillsModel({ name ,des ,levels})

    console.log(req.body);
    try {
        await SkillModel.save();

        res.status(201).json(SkillModel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


