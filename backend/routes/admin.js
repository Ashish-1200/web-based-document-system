const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const admin_m = require('../models/admin.m');
const adminController = require('../controllers/Admin');

router.get('/list', adminController.get_all_admins);   //retrieves a list of all admin users
router.post('/create', adminController.createAdmin); //creates a new admin user
router.get('/:id', adminController.getAdminById);     //retrieves information for a specific admin user
router.delete('/:id', adminController.deleteAdminById); //deletes a specific admin user

router.put('/:userId', AdminsController.admin_put_update);  // Update admin user

module.exports = router