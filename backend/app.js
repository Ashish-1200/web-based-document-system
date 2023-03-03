const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');

const api = express();

api.listen(3000,(error)=>console.log(error));


//sets up the middleware to parse incoming request bodies in JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// add an entry way / -root


//Cross-Origin Resource Sharing (CORS) middleware
app.use(cors())

// connection to the MongoDB database
mongoose.connect("mongodb://localhost/WBDS",()=>{
    console.log("Database Connected")                     // log a message in the console when the connection to the database is established successfully
},
//serve the static files located in the "images" and "uploads" directories
app.use('/images', express.static('images'));
app.use('/uploads',express.static('uploads'));

//Importing Schema models
const users = require("./DataModels/users.model")
const admin = require("./DataModels/admins.model")
const equipmentinventory = require("./DataModels/equipmentinventory.model");
const event = require("./DataModels/event.model");
const financialreport = require("./DataModels/financialreport.model");
const incidentreport = require("./DataModels/incidentreport.model");
const insurancereports = require("./DataModels/insurancereports.model");
const intendedprojects = require("./DataModels/intendedprojects.model");
const policies = require("./DataModels/policies.model");
const public = require("./DataModels/public.model");
const volunteer = require("./DataModels/volunteer.model");


// Routes
//Routes
const users = require('./Routes/users');
const admin = require('./Routes/admin');
const equipmentInventory = require('./Routes/equipmentInventory');
const event = require('./Routes/event');
const financialReport = require('./Routes/financialReport');
const incidentReport = require('./Routes/incidentReport');
const insuranceReports = require('./Routes/insuranceReports');
const intendedProjects = require('./Routes/intendedProjects');
const policies = require('./Routes/policies');
const public = require('./Routes/public');
const volunteer = require('./Routes/volunteer');

app.use('/api/users', users);
app.use('/api/admin', admin);
app.use('/api/equipmentinventory', equipmentInventory);
app.use('/api/event', event);
app.use('/api/financialreport', financialReport);
app.use('/api/incidentreport', incidentReport);
app.use('/api/insurancereports', insuranceReports);
app.use('/api/intendedprojects', intendedProjects);
app.use('/api/policies', policies);
app.use('/api/public', public);
app.use('/api/volunteer', volunteer);