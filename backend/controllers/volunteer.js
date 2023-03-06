const mongoose = require ('mongoose')
const  volunteer= require('../models/volunteer.m')

exports.volunteer_retrieve = (req, res, next) => {
    Volunteer_model.find()
      .then(volunteers => {
        res.status(200).json(volunteers);
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  };

  exports.volunteer_create = function(req, res, next) {
    const new_volunteer = new Volunteer({
    _id: new mongoose.Types.ObjectId(),
    UserID: mongoose.Types.ObjectId(req.user_id)
    })
    
    new_volunteer.save(function(err,new_volunteer){
        if(err)
           res.send(err);
           else
           res.send({
               status:500, message:'Volunteer created',volunteerdetail:new_volunteer 
    
           })
        
        })
    
    }

    exports.retrieve_single_volunteer = function(req, res) {
        volunteer.findOne({_id: req.params.id})
        .populate("UserID")
        .then(function(dbVolunteer) {
        res.send(dbVolunteer);
        })
        .catch(function(error) {
        res.send("User not found");
        });
        }

        exports.remove_volunteer = function(req, res, next) {
            volunteer.Removeone({_id: req.params.userId})
            .exec()
            .then(result => {
            console.log(result);
            res.status(200).json({
            message: "The User has been removed"
            });
            })
            .catch(err => {
            console.log(err);
            res.status(500).json({
            error: err
            });
            });
            };
            
            
            
            
    
    
    
    
    