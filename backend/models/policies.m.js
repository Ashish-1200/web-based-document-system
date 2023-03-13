const mongoose = require("mongoose");
const policiesSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,

adminID: {
type: mongoose.Schema.Types.ObjectId,
ref: "admins",
},

departmentName: {
type: String,
required: true,
},

Purpose: {
type: String,
required: true,
},

Terms: {
type: String,
required: true,
},

Scope: {
type: String,
required: true,
},

Limitations: {
type: String,
required: true,
},

Period: {
type: String,
required: true,
},
uploadDocument: {
    type: [String]
    }
});

module.exports = mongoose.model("policies", policiesSchema);