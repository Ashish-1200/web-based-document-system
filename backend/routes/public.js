const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const d_public = require('../models/public.m');
const PublicController = require('../controllers/public');

// Get Public list
router.get('/list', PublicController.getPublicList);

// Create new public user
router.post('/create', PublicController.createPublic);

//Retrieve a specific Public record
router.get('/:id', PublicController.getOnePublic);

// Delete a public user
router.delete('/:userId', PublicController.deletePublic);

module.exports = router