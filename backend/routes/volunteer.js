const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const d_volunteer = require('../models/volunteer.m')
const VolunteerController = require('../controllers/volunteer')



//Get Disaster  volunteer listing
router.get('/list',VolunteerController.volunteer_retrieve );

//Creating new  volunteer users
router.post('/create',VolunteerController.volunteer_create);

//Get a specific Admin Information
router.get("/:id",VolunteerController.retrieve_single_volunteer);

router.delete('/:userId',VolunteerController.remove_volunteer);
module.exports = router