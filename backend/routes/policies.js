const express = require('express');
const router = express.Router();
const multer = require('multer');
const PoliciesController = require('../controller/policies');
const policies = require('../model/policies.m');

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

router.get('/', PoliciesController.getAllPolicies);
router.get('/:id', PoliciesController.getPolicy);
router.post('/', upload.single('policiesDocument'), PoliciesController.createPolicy);
router.patch('/:id', upload.single('policiesDocument'), PoliciesController.updatePolicy);
router.delete('/:id', PoliciesController.deletePolicy);

module.exports = router