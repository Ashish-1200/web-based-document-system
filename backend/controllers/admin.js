const admin_m= require('../models/admin.m');
const mongoose = require ('mongoose')




exports.get_all_admins = function(req, res, next) {
admin_m.find(function(error, admins){
if(error) {
    if(err)
    res.send(err);
    else
    res.status(200).json,
    res.send({ Count: admins.length, AdminUsers: admins});
}})};


exports.createAdmin = function(req, res, next) {
const newAdmin = new admin_m({
_id: mongoose.Types.ObjectId(),
UserID: mongoose.Types.ObjectId(req.user_id)
});



newAdmin.save(function(error, createdAdmin){
    if(error) {
        res.send(error);
    } else {
        res.status(500).json({
            status: "Admin created",
            AdminInformation: createdAdmin
        });
    }
});
};



exports.getOneAdmin = function(req, res) {
admin_m.findOne({_id: req.params.id})
.populate("UserID")
.then(function(adminData){
res.send(adminData);
})
.catch(function(error){
res.send("Admin not found");
});
};









exports.removeAdmin = function(req, res, next) {
admin_m.deleteOne({_id: req.params.userId})
.exec()
.then(result => {
console.log(result);
res.status(200).json({
message: "Admin deleted"
});
})
.catch(error => {
console.log(error);
res.status(500).json({
error: error
});
});
};