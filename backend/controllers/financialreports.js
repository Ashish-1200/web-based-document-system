const mongoose = require('mongoose');
const financialReports = require('../models/financialreports.m');

exports.getAllFinancialReports = (req, res) => {
  financialReports.find({})
    .then(docs => res.status(200).json(docs))
    .catch(error => console.log(error));
};

exports.getSingleFinancialReport = (req, res) => {
  financialReports.findOne({ _id: req.params.id })
    .then(doc => res.send(doc))
    .catch(error => console.log(error));
};

exports.createFinancialReport = (req, res) => {
  const newFinancialReport = new financialReports({
    _id: mongoose.Types.ObjectId(),
    adminID: req.body.adminID,
    publicID: req.body.publicID,
    departmentName: req.body.departmentName,
    period: req.body.period,
    incomeSection: req.body.incomeSection,
    incomeDate: req.body.incomeDate,
    totalIncome: req.body.totalIncome,
    expenditureSection: req.body.expenditureSection,
    expenditureDate: req.body.expenditureDate,
    totalExpenditure: req.body.totalExpenditure
  });
  
  newFinancialReport.save()
    .then(savedReport => res.send(savedReport))
    .catch(error => console.log(error));
};

exports.updateFinancialReport = (req, res) => {
  const id = req.params.updateFinancialReport;
  financialReports.updateOne({ _id: id }, { $set: {
    adminID: req.body.adminID,
    publicID: req.body.publicID,
    departmentName: req.body.departmentName,
    period: req.body.period,
    incomeSection: req.body.incomeSection,
    incomeDate: req.body.incomeDate,
    totalIncome: req.body.totalIncome,
    expenditureSection: req.body.expenditureSection,
    expenditureDate: req.body.expenditureDate,
    totalExpenditure: req.body.totalExpenditure
  }})
    .exec()
    .then(updatedReport => res.send(updatedReport))
    .catch(error => console.log(error));
};

exports.deleteFinancialReport = (req, res) => {
  financialReports.deleteOne({ _id: req.params.deleteFinancialReport })
    .exec()
    .then(() => res.status(200).json({ message: 'Financial report deleted!' }))
    .catch(error => console.log(error));
};