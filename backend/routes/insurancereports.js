const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose')
const InsuranceController = require('../controllers/insurance');
const d_insurancereports = require('../models/insurancereport');

// Multer middleware for file upload
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only PDF is allowed'), false);
  }
};
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB
  },
  fileFilter: fileFilter
});

// Get all insurance reports
router.get('/', InsuranceController.getInsuranceReports);

// Create a new insurance report
router.post('/', upload.single('file'), InsuranceController.createInsuranceReport);

// Get a specific insurance report by ID
router.get('/:id', InsuranceController.getInsuranceReportById);

// Update an existing insurance report by ID
router.put('/:id', upload.single('file'), InsuranceController.updateInsuranceReport);

// Delete an insurance report by ID
router.delete('/:id', InsuranceController.deleteInsuranceReport);

module.exports = router