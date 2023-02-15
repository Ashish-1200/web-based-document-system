const mongoose = require("mongoose");
const intendedProjectsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admins",
  },
  publicID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "public",
  },
  projectDescription: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  finishDate: {
    type: Date,
    required: true,
  },
  personnelRequired: {
    type:string,
    required: true,
  },
  costRequired: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("intendedProjects", intendedProjectsSchema);