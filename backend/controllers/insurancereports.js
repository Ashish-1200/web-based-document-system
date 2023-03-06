const mongoose = require ('mongoose');
const insuranceReports = require('../models/insurancereports.m');

exports.getInsuranceReports = (req, res, next) => {
insuranceReports.find((err, insuranceReportsList) => {
if (err) {
return res.send(err);
}
res.status(200).json(insuranceReportsList);
});
};

exports.getInsuranceReport = (req, res, next) => {
insuranceReports.findOne({ _id: req.params.id }, (err, insuranceReport) => {
if (err) {
return res.send(err);
}
if (!insuranceReport) {
return res.status(404).send({ message: 'Insurance report not found.' });
}
res.status(200).json(insuranceReport);
});
};

exports.createInsuranceReport = (req, res, next) => {
const newInsuranceReport = new insuranceReports({
_id: mongoose.Types.ObjectId(),
adminId: req.body.adminId,
departmentName: req.body.departmentName,
period: req.body.period,
projectDescription: req.body.projectDescription,
projectDate: req.body.projectDate,
insuranceDate: req.body.insuranceDate
});

newInsuranceReport
.save()
.then((savedInsuranceReport) => {
res.status(200).json(savedInsuranceReport);
})
.catch((error) => {
res.status(500).send({ message: 'Failed to create insurance report.' });
});
};

exports.updateInsuranceReport = (req, res, next) => {
insuranceReports.updateOne(
{ _id: req.params.id },
{
$set: {
adminId: req.body.adminId,
departmentName: req.body.departmentName,
period: req.body.period,
projectDescription: req.body.projectDescription,
projectDate: req.body.projectDate,
insuranceDate: req.body.insuranceDate
}
}
)
.exec()
.then((updatedInsuranceReport) => {
res.status(200).json(updatedInsuranceReport);
})
.catch((error) => {
res.status(500).send({ message: 'Failed to update insurance report.' });
});
};

exports.deleteInsuranceReport = (req, res, next) => {
insuranceReports.deleteOne({ _id: req.params.id })
.exec()
.then(() => {
res.status(200).send({ message: 'Insurance report deleted.' });
})
.catch((error) => {
res.status(500).send({ message: 'Failed to delete insurance report.' });
});
};