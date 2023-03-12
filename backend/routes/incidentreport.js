const express = require('express');
const router = express.Router();
const multer = require('multer');

const IncidentReportController = require('../controllers/Incidentreport');
//const incidentreport = require('../models/incidentreports.m');

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});



/*/ Set up multer to handle file uploads
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});
*/

// Define routes for incident reports
router.get('/list', IncidentReportController.incidentreport_list);                 //Get incident reports

router.get('/:id', IncidentReportController.get_single_incident_report);
router.put('/:id', IncidentReportController.update_incident_report);
router.delete('/_id', IncidentReportController.incidentreport_delete_one);    // Delete reports
router.post('/create', IncidentReportController.create_incident_report);


module.exports = router

