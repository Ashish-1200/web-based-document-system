const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const EquipmentInventoryController = require('../controllers/Equipmentinventory')
//const EquipmentInventory = require('../models/equipmentinventory.m')
const multer = require('multer')
const checkAuth= require('../middleware/authcheck')

// Multer middleware configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

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
    throw error; }

  

  // Save file information to database
  const pdfDocument = {
    path: req.file.path,
    title: req.body.title,
    description: req.body.description
  };
  // save pdfDocument to the database
  res.status(201).json({ message: 'PDF file was uploaded successfully!', pdfDocument: pdfDocument });
});



// Get list of equipment
router.get('/list', EquipmentInventoryController.equipmentInventory_list)

// Get a specific equipment information
router.get('/:id', EquipmentInventoryController.equipmentInventory_get_one)

// Create a new equipment
router.post('/create', EquipmentInventoryController.equipmentInventory_create)

// Update an existing equipment
router.put('/:updateUser', EquipmentInventoryController.equipmentInventory_update)

// Delete an equipment
router.delete('/:id', checkAuth, EquipmentInventoryController.equipmentInventory_delete_one)

module.exports = router;