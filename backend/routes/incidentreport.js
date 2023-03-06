const express = require('express');
const router = express.Router();
const multer = require('multer');

const IncidentReportController = require('../controllers/Incidentreport');
const incidentreport = require('../models/incidentreport.m');

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

// File filter to accept only certain file types
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Set up multer to handle file uploads
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

// Define routes for incident reports
router.get('/', IncidentReportController.getAllReports);                 //Get incident reports
router.post('/', upload.array('images', 5), IncidentReportController.createReport);  //New document in the collection
router.get('/:reportId', IncidentReportController.getReportById);
router.put('/:reportId', IncidentReportController.updateReport);
router.delete('/:reportId', IncidentReportController.deleteReport);    // Delete reports

module.exports = router