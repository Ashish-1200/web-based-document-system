const express = require('express');
const router = express.Router();
const mongoose = require ('mongoose');
const Event = require('../DataModels/Event.model');
const EventController = require('../controller/event');

//Get List of event reports
router.get('/list', EventController.event_get_list);

//Creating  a new document within the collection
router.post('/create', EventController.event_create);

//Get event file
router.get('/:id', EventController.event_get_one);

//Delete event
router.delete('/:eventID', EventController.event_delete_one);

module.exports = router;



