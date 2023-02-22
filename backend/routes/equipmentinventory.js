const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const EquipmentInventoryController = require('../controller/equipment_inventory')
const Equipment = require('../DataModels/Equipment.model')
const multer = require('multer')

// Multer middleware configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // Reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})

// Get list of equipment
router.get('/list', EquipmentInventoryController.equipment_list)

// Get a specific equipment information
router.get('/:id', EquipmentInventoryController.equipment_get_one)

// Create a new equipment
router.post('/create', upload.single('equipmentImage'), EquipmentInventoryController.equipment_create)

// Update an existing equipment
router.put('/:id', EquipmentInventoryController.equipment_update)

// Delete an equipment
router.delete('/:id', EquipmentInventoryController.equipment_delete)

module.exports = router