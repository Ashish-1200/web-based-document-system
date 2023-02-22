const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Volunteer = require('../DataModels/Volunteer.model')
const VolunteerController = require('../controller/volunteer')

router.route('/')
  .get(VolunteerController.listVolunteers)  //retrieves a list of all volunteers and creates a new volunteer
  .post(VolunteerController.createVolunteer)

router.route('/:id')
  .get(VolunteerController.getVolunteer)    //retrieves information about a specific volunteer and deletes a specific volunteer
  .delete(VolunteerController.deleteVolunteer)

module.exports = router