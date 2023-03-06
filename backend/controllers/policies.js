const mongoose = require('mongoose');
const Policy = require('../models/policies.m');

exports.getAllPolicies = (req, res) => {
  Policy.find({})
    .then(docs => res.status(200).json(docs))
    .catch(error => console.log(error));
};

exports.getPolicy = (req, res) => {
  Policy.findOne({ _id: req.params.id })
    .then(doc => res.send(doc))
    .catch(error => console.log(error));
};

exports.createPolicy = (req, res) => {
  const newPolicy = new Policy({
    _id: mongoose.Types.ObjectId(),
    adminId: req.body.adminId,
    departmentName: req.body.departmentName,
    purpose: req.body.purpose,
    terms: req.body.terms,
    scope: req.body.scope,
    limitations: req.body.limitations,
    period: req.body.period
  });
  
  newPolicy.save()
    .then(savedPolicy => res.send(savedPolicy))
    .catch(error => console.log(error));
};

exports.updatePolicy = (req, res) => {
  const id = req.params.id;
  Policy.updateOne({ _id: id }, { $set: {
    adminId: req.body.adminId,
    departmentName: req.body.departmentName,
    purpose: req.body.purpose,
    terms: req.body.terms,
    scope: req.body.scope,
    limitations: req.body.limitations,
    period: req.body.period
  }})
    .exec()
    .then(updatedPolicy => res.send(updatedPolicy))
    .catch(error => console.log(error));
};

exports.deletePolicy = (req, res) => {
  Policy.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => res.status(200).json({ message: 'Policy deleted!' }))
    .catch(error => console.log(error));
};