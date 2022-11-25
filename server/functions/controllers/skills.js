// import SkillsModel from '../models/skillmodel.js';
const SkillsModel = require('../models/skillmodel.js');

module.exports = getSkills = async (req,res) =>{

    try{
        const skills = await SkillsModel.find();
        
        //console.log(skills);
       
        res.status(200).json(skills);
    } catch(error){
        res.status(404).json( {message: error.message });
    }
};

module.exports = newSkill = async (req,res) =>{
    const { name ,des ,levels } = req.body;
    const SkillModel = new SkillsModel({ name ,des ,levels})

    console.log(req.body);
    try {
        await SkillModel.save();

        res.status(201).json(SkillModel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


