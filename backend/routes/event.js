const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const event = require('../models/event.m');
const EventController = require('../controllers/Event');

//Get List of event reports
router.get('/list', EventController.getEventList);

//Creating  a new document within the collection
router.post('/create', EventController.createEvent);

//Get event file
router.get('/:id', EventController.getEvent);

//Delete event
router.delete('/:eventID', EventController.deleteEvent);

module.exports = router



