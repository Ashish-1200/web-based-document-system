const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const d_admin = require('../models/admin.m');
const adminController = require('../controllers/Admin');

router.get('/list', adminController.get_all_admins);   //retrieves a list of all admin users
router.post('/create', adminController.createAdmin); //creates a new admin user
router.get('/:id', adminController.getOneAdmin);     //retrieves information for a specific admin user
router.delete('/:id', adminController.removeAdmin); //deletes a specific admin user

router.put('/:userId', adminController.admin_put_update);  // Update admin user

module.exports = router