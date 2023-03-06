const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const d_users = require ("./models/users.m");
const checkAuth = require('../api/middleware/check-auth');
const incidentReportController = require('../controller/incidentReport');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
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

router.get('/list', incidentReportController.incidentReport_get_list);

router.get('/chart', (req, res, next) => {
  IncidentReport.find({})
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
    .catch((error) => console.log(error))
});

router.get('/:id', incidentReportController.incidentReport_get_one);

router.post('/create', upload.single('image'), incidentReportController.incidentReport_post_create);

router.put('/:id', incidentReportController.incidentReport_put_update);

router.delete('/:id', checkAuth, incidentReportController.incidentReport_delete_one);

module.exports = router
