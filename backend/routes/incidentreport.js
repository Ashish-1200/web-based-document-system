const express = require('express');
const router = express.Router();
const multer = require('multer');

const IncidentReportController = require('../controllers/Incidentreport');
const incidentreport = require('../models/incidentreports.m');

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
router.get('/list', IncidentReportController.incidentreport_list);                 //Get incident reports
router.post('/create', upload.array('images', 5), IncidentReportController.create_incident_report);  //New document in the collection
router.get('/:id', IncidentReportController.get_single_incident_report);
router.put('/:updateuser', IncidentReportController.update_incident_report);
router.delete('/:incidentreportid', IncidentReportController.incidentreport_delete_one);    // Delete reports


module.exports = router