const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const d_volunteer = require('../models/volunteer.m')
const VolunteerController = require('../controllers/volunteer')

router.route('/')
  .get(VolunteerController.volunteer_retrieve)  //retrieves a list of all volunteers and creates a new volunteer
  .post(VolunteerController.volunteer_create)

router.route('/:id')
  .get(VolunteerController.retrieve_single_volunteer)    //retrieves information about a specific volunteer and deletes a specific volunteer
  .delete(VolunteerController.remove_volunteer)

module.exports = router