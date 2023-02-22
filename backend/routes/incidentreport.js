const express = require('express');
const router = express.Router();
const incidentReportController = require('../controllers/incidentReportController');

// Get list of incident reports
router.get('/list', incidentReportController.getIncidentReportList);

// Create a new incident report
router.post('/', incidentReportController.createIncidentReport);

// Get details of a specific incident report
router.get('/:id', incidentReportController.getIncidentReportById);

// Update an existing incident report
router.put('/:id', incidentReportController.updateIncidentReport);

// Delete an incident report
router.delete('/:id', incidentReportController.deleteIncidentReport);

module.exports = router;