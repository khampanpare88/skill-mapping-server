// import CoursesModel from '../models/coursesmodel.js';
const coursesModel = require('../models/coursesmodel.js');

module.exports = UpdateorNew = async (req,res) =>{
    const { course_id, sel_topic,skills,isSelTopic } = req.body;

    if( isSelTopic == true /*เป็นseltopic*/){
        // const { id,name ,des , sel_topic,levels } = req.body;
        if(course_id == '6335309e1145d8b493deb6a3' ){
            const Courses = new coursesModel({ id : "261498",name : "Selected Topics in Computer Networks" , sel_topic,skills})
            try {
                await Courses.save();
        
                res.status(201).json (Courses );
            } catch (error) {
                res.status(409).json({ message: error.message });
            }

        }
        else if(course_id == '633531851145d8b493deb6a4' ){
            const Courses = new coursesModel({ id : "261497",name : "Selected Topics in Computer Software" , sel_topic,skills})
            try {
                await Courses.save();
        
                res.status(201).json (Courses );
            } catch (error) {
                res.status(409).json({ message: error.message });
            }

        }
    }
    else{

        if (!mongoose.Types.ObjectId.isValid(course_id)) return res.status(404).send(`No post with id: ${course_id}`);

        const updatedCoursesSkill = { skills };

        await CoursesModel.findByIdAndUpdate(course_id, updatedCoursesSkill, { new: true });

        res.json(updatedCoursesSkill);
    }

}