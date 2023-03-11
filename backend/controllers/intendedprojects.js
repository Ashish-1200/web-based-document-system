const mongoose = require('mongoose');
const IntendedProject = require('../models/intendedprojects.m');

exports.getIntendedProjects = (req, res, next) => {
  IntendedProject.find((err, intendedProjects) => {
    if (err) {
      return res.send(err);
    }
    res.status(200).json(intendedProjects);
  });
};

exports.getIntendedProject = (req, res, next) => {
  IntendedProject.findOne({ _id: req.params.id }, (err, intendedProject) => {
    if (err) {
      return res.send(err);
    }
    if (!intendedProject) {
      return res.status(404).send({ message: 'Intended project not found.' });
    }
    res.status(200).json(intendedProject);
  });
};

exports.createIntendedProject = (req, res, next) => {
  const newIntendedProject = new IntendedProject({
    _id: mongoose.Types.ObjectId(),
    adminId: req.body.adminId,
    publicId: req.body.publicId,
    projectDescription: req.body.projectDescription,
    startDate: req.body.startDate,
    finishDate: req.body.finishDate,
    personnelRequired: req.body.personnelRequired,
    costRequired: req.body.costRequired,
  });

  newIntendedProject
    .save()
    .then((savedIntendedProject) => {
      res.status(200).json(savedIntendedProject);
    })
    .catch((error) => {
      res.status(500).send({ message: 'Failed to create intended project.' });
    });
};

exports.updateIntendedProject = (req, res, next) => {
  IntendedProject.updateOne(
    { _id: req.params.id },
    {
      $set: {
        adminId: req.body.adminId,
        publicId: req.body.publicId,
        projectDescription: req.body.projectDescription,
        startDate: req.body.startDate,
        finishDate: req.body.finishDate,
        personnelRequired: req.body.personnelRequired,
        costRequired: req.body.costRequired,
      },
    }
  )
    .exec()
    .then((updatedIntendedProject) => {
      res.status(200).json(updatedIntendedProject);
    })
    .catch((error) => {
      res.status(500).send({ message: 'Failed to update intended project.' });
    });
};

exports.deleteIntendedProject = (req, res, next) => {
  IntendedProject.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => {
      res.status(200).send({ message: 'Intended project deleted.' });
    })
    .catch((error) => {
      res.status(500).send({ message: 'Failed to delete intended project.' });
    });
};