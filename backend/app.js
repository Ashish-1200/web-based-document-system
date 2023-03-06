const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');
const path = require ('path');

const app = express();

app.listen(3000,(error)=>console.log(error));


//sets up the middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



//Cross-Origin Resource Sharing (CORS) middleware
app.use(cors())

// connection to the MongoDB database
mongoose.connect("mongodb://localhost/docsysten"),()=>{
    console.log("Database Connected")                     // log a message in the console when the connection to the database is established successfully
},
//serve the static files located in the "images" and "uploads" directories
app.use('/images', express.static('images'));
app.use('/uploads',express.static('uploads'));

//Importing Schema models
const users = require("./models/users.m");
const admin = require("./models/admin.m");
const equipmentinventory = require("./models/equipmentinventory.m");
const event = require("./models/event.m");
const financialreports = require("./models/financialreports.m");
const incidentreports = require("./models/incidentreports.m");
const insurancereports = require("./models/insurancereports.m");
const intendedprojects = require("./models/intendedprojects.m");
const policies = require("./models/policies.m");
const public = require("./models/public.m");
const volunteer = require("./models/volunteer.m");



//Routes
const d_users = require('./Routes/users');
const d_admin = require('./Routes/admin');
const d_equipmentinventory = require('./Routes/equipmentinventory');
const d_event = require('./Routes/event');
const d_financialReport = require('./Routes/financialreport');
const d_incidentReport = require('./Routes/incidentreport');
const d_insuranceReports = require('./Routes/insurancereports');
const d_intendedProjects = require('./Routes/intendedprojects');
const d_policies = require('./Routes/policies');
const d_public = require('./Routes/public');
const d_volunteer = require('./Routes/volunteer');

app.use('/users', users);
app.use('/admin', admin);
app.use('/equipmentinventory', equipmentinventory);
app.use('/event', event);
app.use('/financialreport', financialreports);
app.use('/incidentreport', incidentreports);
app.use('/insurancereports', insurancereports);
app.use('/intendedprojects', intendedprojects);
app.use('/policies', policies);
app.use('/public', public);
app.use('/volunteer', volunteer);


//request is made to a route that does not exist
app.use((req,res,next)=>{
    const error = new Error ('Not found');
    error.status=404;
    next(error);
})

//allows requests from any origin, sets the allowed headers, and specifies the allowed methods for HTTP requests
app.use((req, res, next) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    });
    next();
  });


  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });


  module.exports = app;