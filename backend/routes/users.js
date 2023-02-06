const express = require('express')
const router = express.Router()
const mongoose = require ('mongoose')
const User_model= require('../DataModels/Users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Admin_model= require('../DataModels/Admins.model')
const UsersController = require ('../controller/users')
const checkAuth = require ('../api/middleware/check-auth')




router.get('/list',UsersController.users_get_list );

router.get ('/userchart',UsersController.getuserschart)


router.get("/:id",UsersController.users_get_one);  //Find user based on ID


router.post('/signup',UsersController.users_signup); //Registration 


router.post('/login',UsersController.users_login) //User login


