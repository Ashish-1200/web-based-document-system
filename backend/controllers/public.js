const mongoose = require ('mongoose')
const  public= require('../models/public.m')

exports.getPublicList = function(req, res, next) {
    public.find(function(error, publicres){
    if(error) {
    res.send(error);
    } else {
    res.status(200).json,
    res.send({ TotalUsers: publicres.length, PublicUsers: publicres });
    }
    });
    };
    
    exports.getOnePublic = function(req, res) {
    public.findOne({_id: req.params.id})
    .populate("UserID")
    .then(function(publicData) {
    res.send(publicData);
    })
    .catch(function(error) {
    res.send("User not found");
    });
    };
    
    exports.createPublic = function(req, res, next) {
    let newPublicUser = new public({
    _id: mongoose.Types.ObjectId(),
    UserID: mongoose.Types.ObjectId(req.user_id)
    });
    
    newPublicUser.save(function(err, newPublicUser){
    if(err) {
    res.send(err);
    } else {
    res.send({
    status: 500,
    message: 'Public User created',
    publicUserDetail: newPublicUser
    });
    }
    });
    };
    
    exports.deletePublic = function(req, res, next){
    public.deleteOne({_id: req.params.userId})
    .exec()
    .then(result => {
    console.log(result);
    res.status(200).json({
    message: "The User is deleted"
    });
    })
    .catch(err => {
    console.log(err);
    res.status(500).json({
    error: err
    });
    });
    };