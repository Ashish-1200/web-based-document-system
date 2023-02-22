onst express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const public_model = require('../DataModels/Public.model');
const PublicController = require('../controller/public');

// Get Public list
router.get('/list', PublicController.public_get_list);

// Create new public user
router.post('/create', PublicController.public_post_create);

//Retrieve a specific Public record
router.get('/:id', PublicController.public_get_one);

// Delete a public user
router.delete('/:publicId', PublicController.public_delete_one);

module.exports = router;