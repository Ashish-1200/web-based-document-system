const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({

_id: mongoose.Schema.Types.ObjectId,

adminID: {
type: mongoose.Schema.Types.ObjectId,
ref: "Admins",
},

volunteerID: {
type: mongoose.Schema.Types.ObjectId,
ref: "Volunteers",
},

publicID: {
type: mongoose.Schema.Types.ObjectId,
ref: "Public",
},

eventName: {
type: String,
required: true,
},

eventDes: {
type: String,
required: true,
},

eventDate: {
type: String,
required: true,
},

uploadDocument: {
    type: [String]
    }
    });



module.exports = mongoose.model("event", eventSchema);