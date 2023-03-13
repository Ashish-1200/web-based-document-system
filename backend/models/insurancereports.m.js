const mongoose = require("mongoose");

const insurancereportsSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,

adminID: {
type: mongoose.Schema.Types.ObjectId,
ref: "Admins"
},

departmentName: {
type: String,
required: true
},

period: {
type: String,
required: true
},

projectDescription: {
type: String,
required: true
},

projectDate: {
type: Date,
default: () => Date.now()
},

insuranceDate: {
type: Date,
default: () => Date.now()
},


uploadDocument: {
    type: [String]
    }
});



module.exports = mongoose.model("insurancereports", insurancereportsSchema);