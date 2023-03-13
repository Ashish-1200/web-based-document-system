const mongoose = require ('mongoose')
const EventModel = require('../models/event.m')

exports.getEventList = function(req, res, next) {
EventModel.find(function(error, eventList) {
if(error) {
res.send(error);
} else {
res.send({ status: 200, count: eventList.length, eventList: eventList });
}
});
}

exports.createEvent = (req, res, next) => {
const newEvent = new EventModel({
_id: mongoose.Types.ObjectId(),
eventName: req.body.eventName,
eventDes: req.body.eventDes,
eventDate: req.body.eventDate
});

newEvent
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));

res.status(200).json({
    message: "Event created successfully.",
    event: newEvent
});
}

exports.getEvent = function(req, res, next) {
EventModel.findOne({ _id: req.params.id })
.then(function(foundEvent) {
res.send(foundEvent);
})
.catch(function(error) {
res.send("Event not found.");
});
}

exports.deleteEvent = function(req, res, next) {
EventModel.deleteOne({ _id: req.params.id })
.exec()
.then(result => {
console.log(result);
res.status(200).json({
message: "Event deleted."
});
})
.catch(error => {
console.log(error);
res.status(500).json({
error: error
});
});
}

exports.updateEvent = function(req, res, next) {
    const id = req.params.updateIncidentReport;
    IncidentReport.updateOne(
    { _id: id },
    {
    $set: {
        adminID:req.body.adminID,
        volunteerID:req.body.volunteerID,
        publicID:req.body.publicID,
        eventName:req.body.eventName,
        eventDes:req.body.eventDes,
        eventDate:req.body.eventDate
    }
    }
    )
    .exec()
    .then(function(incidentReport) {
    return res.send(incidentReport);
    })
    .catch(function(err) {
    return res.send('Cannot update incident report');
    });
    };
    