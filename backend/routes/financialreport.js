const express = require('express');
const router = express.Router();
const multer = require('multer');
const FinancialReportController = require('../controllers/Financialreports');
//const financialReport = require('../model/financialreports.m');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});


const fileFilter = function(req, file, cb) {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get('/list', FinancialReportController.getAllFinancialReports);
router.get('/:id', FinancialReportController.getSingleFinancialReport);
router.post('/create', upload.single('financialReport'), FinancialReportController.createFinancialReport);
router.patch('/:updateuser', upload.single('financialReport'), FinancialReportController.updateFinancialReport);
router.delete('/:financialreportid', FinancialReportController.deleteFinancialReport);

module.exports = router