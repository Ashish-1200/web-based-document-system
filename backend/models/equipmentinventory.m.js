const mongoose = require("mongoose");
const equipmentinventorySchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,

adminID: {
type: mongoose.Schema.Types.ObjectId,
ref: "admins"
},

DepartmentName: {
type: String,
required: true
},

Project: {
type: String,
required: true
},

DateOfProject: {
type: Date,
required: true
},

EquipmentDescription: {
type: String,
required: true
},

SerialNo: {
type: Number,
required: true
},

DateAcquired: {
type: Date,
required: true
},

CostOfEquipment: {
type: Number,
required: true
}
});

module.exports = mongoose.model("equipmentinventory", equipmentinventorySchema);