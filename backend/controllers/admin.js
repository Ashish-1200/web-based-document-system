const admin_m= require('../models/admin.m');
const mongoose = require ('mongoose')

const mongoose = require ('mongoose')


exports.get_all_admins = function(req, res, next) {
admin_m.find(function(error, admins){
if(error) {
res.send(error);
} else {
res.status(200).json({
TotalAdmins: admins.length,
AdminDetails: admins
});
}
});
};

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



exports.admin_put_update = function(req, res, next) {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    admin_m.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "Admin updated"
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                error: error
            });
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