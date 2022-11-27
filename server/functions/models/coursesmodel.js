const mongoose = require("mongoose");
const coursesschema = mongoose.schema({
  id: String,
  name: String,
  des: String,
  sel_topic: String,
  skills: [
    {
      skill_id: String,
      skill_name: String,
      level_id: String,
      comment: String,
    },
  ],
});

const coursesModel = mongoose.model("CoursesModel", coursesschema);

module.exports = coursesModel;
