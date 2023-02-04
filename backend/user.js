const mongoose = require ('mongoose')
const User_model= require('../DataModels/Users.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.users_get = function(req, res, next)     // Users to be displayed.
{
    User_model.find(function(err, usersresponse){
      if(err)
      res.send(err);
      else
      res.send(usersresponse);
    })
}

exports.users_eachone = function(req,res,next) // Search each user by id
{
    User_model.findOne({_id:req.params.id})

    .then(function(dbuser)
    {

        res.send(dbuser);
    })
    .catch(function(err){
        res.send('Cannot find User');
    });
}

exports.users_signup = function(req,res,next)   //Sign up post request.
{
    User_model.find({Email: req.body.Email})
    .exec()
    .then(users => {
        if(users.length >=1)
        {
            return res.status(409).json({
                message: "This Email Address is in use"
            });
        }
        User_model.find({Username: req.body.Username})
    .exec()
    .then(users => {
        if(users.length >=1)
        {
            return res.status(409).json({
                message: "Username is already taken."    //If username is taken it sends an error message
            });
        }

        else
        {
            bcrypt.hash(req.body.Password,10,(err,hash)=>
            {
                if(err)
                {
                    return res.status(500).json
                    ({
                        error:err
                    });
                } else{

            const newUsers = new User_model({
                 _id: mongoose.Types.ObjectId(),
                Username:req.body.Username,
                Userclass:req.body.Userclass,
                Firstname:req.body.Firstname,
                Lastname:req.body.Lastname,
                Requestedrole:req.body.Requestedrole,
                Password:hash,
                Email:req.body.Email,
                DateJoined:req.body.DateJoined

            });

           newUsers
           .save()
           .then(function(dbuser)
           {

               res.send(dbuser);
           })
           .catch(function(err){
               res.send('Cannot create form');
           });
        }
    });
}
    });
  });
}