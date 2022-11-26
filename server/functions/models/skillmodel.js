const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  name: String,
  des: String,
  levels: [
    {
      level_id: String,
      level_des: String,
    },
  ],
}, {versionKey: false});

const skillsModel = mongoose.model("SkillsModel", skillsSchema);
module.exports = skillsModel;
