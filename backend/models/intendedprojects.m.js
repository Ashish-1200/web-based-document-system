const mongoose = require("mongoose");

const IntendedProjectsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "admins",
  },
  ProjectTitle: {
    type: String,
    required: true,
  },
  ProjectDescription: {
    type: String,
    required: true,
  },
  ProjectBudget: {
    type: Number,
    required: true,
  },
  ProjectStartDate: {
    type: Date,
    required: true,
  },
  ProjectEndDate: {
    type: Date,
    required: true,
  },
  ProjectStatus: {
    type: String,
    required: true,
  },
  uploadDocument: {
    type: [String]
    }
});

module.exports = mongoose.model("intendedprojects", IntendedProjectsSchema);
