const mongoose = require("mongoose");
const incidentreportsSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,


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
type: String,
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

uploadDocument: {
type: [String]
}
});

module.exports = mongoose.model("incidentreports", incidentreportsSchema);