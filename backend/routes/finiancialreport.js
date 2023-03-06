const express = require('express');
const router = express.Router();
const multer = require('multer');
const FinancialReportController = require('../controller/financial_report');
const financialReport = require('../model/financialreports.m');

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

router.get('/', FinancialReportController.getFinancialReport);
router.get('/:id', FinancialReportController.getFinancialReport);
router.post('/', upload.single('financialReport'), FinancialReportController.createFinancialReport);
router.patch('/:id', upload.single('financialReport'), FinancialReportController.updateFinancialReport);
router.delete('/:id', FinancialReportController.deleteFinancialReport);

module.exports = router