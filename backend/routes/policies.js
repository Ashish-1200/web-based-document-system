const express = require('express');
const router = express.Router();
const multer = require('multer');
const PoliciesController = require('../controllers/Policies');
const policies = require('../models/policies.m');

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

router.get('/list', PoliciesController.getAllPolicies);
router.get('/:id', PoliciesController.getPolicy);
router.post('/create', upload.single('policiesDocument'), PoliciesController.createPolicy);
router.patch('/:updateuser', upload.single('policiesDocument'), PoliciesController.updatePolicy);
router.delete('/:policiesid', PoliciesController.deletePolicy);

module.exports = router