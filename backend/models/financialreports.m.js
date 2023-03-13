const mongoose = require("mongoose");

const financialreportsSchema = new mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,

adminID: {
type: mongoose.Schema.Types.ObjectId,
ref: "Admins",
},

publicID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "public"
    },

DepartmentName: {
type: String,
required: true,
},

period: {
type: String,
required: true,
},

IncomeSection: {
type: String,
required: true,
},

IncomeDate: {
type: Date,
default: () => Date.now(),
},

TotalIncome: {
type: Number,
required: true,
},

ExpenditureSection: {
type: String,
required: true,
},

ExpenditureDate: {
type: Date,
default: () => Date.now(),
},

TotalExpenditure: {
type: Number,
required: true,
},

uploadDocument: {
    type: [String]
    }
});

module.exports = mongoose.model("financialreports", financialreportsSchema)