const mongoose = require("mongoose");
const incidentreportsSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,

adminID: {
type: mongoose.SchemaTypes.ObjectId,
ref: "admins"
},

volunteerID: {
type: mongoose.SchemaTypes.ObjectId,
ref: "volunteers"
},

publicID: {
type: mongoose.SchemaTypes.ObjectId,
ref: "public"
},

firstName: {
type: String,
required: true
},

lastName: {
type: String,
required: true
},

gender: {
type: String,
required: true
},

age: {
type: Number,
required: true
},

address: {
type: String,
required: true
},

dateOfIncident: {
type: Date,
required: true
},

location: {
type: String,
required: true
},

description: {
type: String,
required: true
},

uploadPhoto: {
type: [String]
}
});

module.exports = mongoose.model("incidentreports", incidentreportsSchema);