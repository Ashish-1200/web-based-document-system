const express = require('express');
const router = express.Router();
const IntendedProjectController = require('../controller/intended_projects');
const multer = require('multer');
const IncidentReport = require('../models/intendedprojects.m');

// Set up multer middleware for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG and PNG files are allowed.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB
  },
  fileFilter: fileFilter
});

// Get a list of all intended projects
router.get('/', IntendedProjectController.getIntendedProjects);

// Get a specific intended project by ID
router.get('/:id', IntendedProjectController.getIntendedProjectById);

// Create a new intended project
router.post('/', upload.single('image'), IntendedProjectController.createIntendedProject);

// Update an intended project by ID
router.put('/:id', IntendedProjectController.updateIntendedProjectById);

// Delete an intended project by ID
router.delete('/:id', IntendedProjectController.deleteIntendedProjectById);

module.exports = router;