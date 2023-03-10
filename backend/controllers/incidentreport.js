const mongoose = require('mongoose');
const IncidentReport = require('../models/incidentreports.m');

exports.incidentreport_list = function(req, res, next) {   //gets a list of all the documents in incident report 
  IncidentReport.find(function(err, incidentReports) {
    if (err) res.send(err);
    else res.status(200).json(incidentReports);
  });
};

exports.get_single_incident_report = function(req, res, next) {
  IncidentReport.findOne({ _id: req.params.reportId })
    .then(function(incidentReport) {
      return res.send(incidentReport);
    })
    .catch(function(err) {
      return res.send('Cannot find incident report.');
    });
};


exports.create_incident_report = function(req, res, next) {
  const incidentReport = new IncidentReport({
    _id: mongoose.Types.ObjectId(),
    adminID: req.body.adminID,
    volunteerID: req.body.volunteerID,
    publicID: req.body.publicID,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    gender: req.body.gender,
    age: req.body.age,
    address: req.body.address,
    dateOfIncident: req.body.dateOfIncident,
    location: req.body.location,
    description: req.body.description,
    uploadPhoto: req.files.map(uploadPhoto => uploadPhoto.path)
  });

  incidentReport
    .save()
    .then(function(dbuser) {
      res.send(dbuser);
    })
    .catch(function(err) {
      res.status(500).send('Cannot create form');
    });
};









exports.update_incident_report = function(req, res, next) {
    const id = req.params.updateIncidentReport;
    IncidentReport.updateOne(
    { _id: id },
    {
    $set: {
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    gender:req.body.gender,
    age:req.body.age,
    address:req.body.address,
    dateOfIncident:req.body.dateOfIncident,
    location:req.body.location,
    description:req.body.description
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

exports.incidentreport_delete_one = function(req, res, next) {
  IncidentReport.deleteOne({ _id: req.params.incidentReportID })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json({
        message: 'Incident report deleted!'
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};