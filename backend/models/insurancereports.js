const mongoose = require("mongoose");

const insuranceReportsSchema = new mongoose.Schema({

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
}
});

module.exports = mongoose.model("InsuranceReports", insuranceReportsSchema);