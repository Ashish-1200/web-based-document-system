const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const d_users = require('../models/users.m');
const authcheck = require('../middleware/authcheck');
const UsersController = require('../controllers/Users');





router.get('/list', UsersController.users_get);


router.get('/:id', UsersController.users_eachone);

//Registration
router.post('/signup',UsersController.users_signup);

//User Login
router.post('/login',UsersController.users_login)


router.put('/:id', UsersController.update_user);

router.delete('/:id', authcheck, UsersController.delete_user);



//Delete User
router.delete('/:userId',UsersController.delete_user);


module.exports = router;

