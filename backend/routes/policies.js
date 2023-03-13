const express = require('express');
const router = express.Router();
const multer = require('multer');
const checkAuth= require('../middleware/authcheck')
const PoliciesController = require('../controllers/Policies');
const policies = require('../models/policies.m');

// Set up multer storage for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});


// Check if uploaded file is a PDF
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only PDF files are allowed!'), false);
  }
};

// Set up multer middleware
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // Limit file size to 5 MB
  }
});

// Handle POST request to upload PDF document
router.post('/upload', upload.single('pdfDocument'), (req, res, next) => {
  // Check if file was uploaded successfully
  if (!req.file) {
    const error = new Error('No PDF file was provided!');
    error.statusCode = 422;
    throw error;
  }

  // Save file information to database
  const pdfDocument = {
    path: req.file.path,
    title: req.body.title,
    description: req.body.description
  };
  // save pdfDocument to the database
  res.status(201).json({ message: 'PDF file was uploaded successfully!', pdfDocument: pdfDocument });
});

router.get('/list', PoliciesController.getAllPolicies);
router.get('/:id', PoliciesController.getPolicy);
router.post('/create', upload.single('policiesDocument'), PoliciesController.createPolicy);
router.patch('/:updateUser',  PoliciesController.updatePolicy);
router.delete('/:id',checkAuth, PoliciesController.deletePolicy);

module.exports = router;