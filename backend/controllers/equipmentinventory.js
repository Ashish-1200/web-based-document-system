const mongoose = require('mongoose');
const EquipmentInventory = require('../models/equipmentinventory.m');

exports.equipmentInventory_list = function(req, res, next) {
EquipmentInventory.find(function(err, equipmentInventoryResponse) {
if (err) res.send(err);
else res.status(200).send(equipmentInventoryResponse);
});
};

exports.equipmentInventory_get_one = function(req, res, next) {
EquipmentInventory.findOne({ _id: req.params.id })
.then(function(dbEquipment) {
res.send(dbEquipment);
})
.catch(function(err) {
res.send('Cannot find equipment information.');
});
};

exports.equipmentInventory_create = function(req, res, next) {
const equipment = new EquipmentInventory({
_id: mongoose.Types.ObjectId(),
AdminID: req.body.AdminID,
DepartmentName: req.body.DepartmentName,
Project: req.body.Project,
ProjectDate: req.body.ProjectDate,
EquipmentDescription: req.body.EquipmentDescription,
SerialNo: req.body.SerialNo,
DateAcquired: req.body.DateAcquired,
Cost: req.body.Cost
});

equipment
.save()
.then(function(dbEquipment) {
res.send(dbEquipment);
})
.catch(function(err) {
res.send('Cannot create equipment entry.');
});
};

exports.equipmentInventory_update = function(req, res, next) {
const id = req.params.updateEquipment;
EquipmentInventory.updateOne(
{ _id: id },
{
$set: {
AdminID: req.body.AdminID,
DepartmentName: req.body.DepartmentName,
Project: req.body.Project,
ProjectDate: req.body.ProjectDate,
EquipmentDescription: req.body.EquipmentDescription,
SerialNo: req.body.SerialNo,
DateAcquired: req.body.DateAcquired,
Cost: req.body.Cost
}
}
)
.exec()
.then(function(dbEquipment) {
res.send(dbEquipment);
})
.catch(function(err) {
res.send('Cannot update equipment entry.');
});
};

exports.equipmentInventory_delete_one = function(req, res, next) {
EquipmentInventory.deleteOne({ _id: req.params.equipmentID })
.exec()
.then(result => {
console.log(result);
res.status(200).json({
message: 'Equipment entry deleted!'
});
})
.catch(err => {
console.log(err);
res.status(500).json({
error: err
});
});
};




