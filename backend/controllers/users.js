
const mongoose = require('mongoose')
const User_model = require('../models/users.m')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.users_get = function (req, res, next)     // Users to be displayed.
{
    User_model.find(function (err, usersres) {
        if (err)
            res.send(err);
        else
            res.send(usersres);
    })
}
exports.users_eachone = function (req, res,next) // Search each user by id
{
    User_model.findOne({ _id: req.params.id })

        .then(function (dbuser) {

            res.send(dbuser);
        })
        .catch(function (err) {
            res.send('Cannot find User');
        });
}

exports.users_signup = function (req, res, next)   //Sign up post request.
{
    User_model.find({ Email: req.body.Email })
        .exec()
        .then(users => {
            if (users.length >= 1) {
                return res.status(409).json({
                    message: "This Email Address is in use"
                });
            }
            User_model.find({ Username: req.body.Username })
                .exec()
                .then(users => {
                    if (users.length >= 1) {
                        return res.status(409).json({
                            message: "Username is already taken."    //If username is taken it sends an error message
                        });
                    }

                    else {
                        bcrypt.hash(req.body.Password, 10, (err, hash) => {
                            if (err) {
                                return res.status(500).json
                                    ({
                                        error: err
                                    });
                            } else {

                                const newUsers = new User_model({
                                    _id: mongoose.Types.ObjectId(),
                                    Username: req.body.Username,
                                    UserType: req.body.UserType,
                                    Firstname: req.body.Firstname,
                                    Lastname: req.body.Lastname,
                                    Password: hash,
                                    Email: req.body.Email,
                                    DateJoined: req.body.DateJoined

                                });

                                newUsers
                                    .save()
                                    .then(function (dbuser) {

                                        res.send(dbuser);
                                    })
                                    .catch(function (err) {
                                        res.send('Cannot create form');
                                    });
                            }
                        });
                    }
                });
        });
}

exports.users_login = async (req, res, next) => {
    console.log(req.body)
    await User_model.find({ Username: req.body.Username, UserType: req.body.userType }).exec()

        .then(user => {

            if (user.length < 1) {
                return res.status(401).json({
                    message: 'No user exists'
                });
            }


            bcrypt.compare(req.body.Password, user[0].Password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Authorization Failed'
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            Username: user[0].Username,
                            _id: user[0]._id,
                            UserType: user[0].UserType,
                            Firstname: user[0].Firstname,
                            Lastname: user[0].Lastname
                        },
                        "secret",
                        {
                            expiresIn: "10h"
                        }
                    );

                    return res.status(200).json({
                        message: "Authorization sucessful",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Authorization Failed !!!!!"
                });
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

}

exports.update_user = function (req, res, next) {
    const id = req.params.updateUser;
    User_model.updateOne({ _id: id }, { $set: { Username: req.body.Username, UserType: req.body.UserType, Firstname: req.body.Firstname, Lastname: req.body.Lastname, Email: req.body.Email, Password: req.body.Password, Requestedrole: req.body.Requestedrole } })
        .exec()
        .then(function (dbuser) {

            res.send(dbuser);
        })
        .catch(function (err) {
            res.send('Cannot update form');
        });

}



exports.delete_user = function (req, res, next) {
    User_model.deleteOne({ _id: req.params.userId })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "The User is deleted"
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}