const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');
const path = require ('path');
mongoose.set('strictQuery', false );
const app = express();

//app.listen(3000,(error)=>console.log(error));



//sets up the middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Used to log requests
const morgan = require('morgan');
app.use(morgan('dev'));

//Cross-Origin Resource Sharing (CORS) middleware
app.use(cors())

//Connection to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/docsystem')
.then(() => console.log("Database is connected"))
.catch((error) => console.log(error));

//app.use(bodyParser.json()); 
// allow application to use json data
app.use(express.json()); 


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
/*const d_users = require('./Routes/users');
const d_admin = require('./Routes/admin');
const d_equipmentinventory = require('./Routes/equipmentinventory');
const d_event = require('./Routes/event');
const d_financialreport = require('./Routes/financialreport');
const d_incidentreport = require('./Routes/incidentreport');
const d_insurancereports = require('./Routes/insurancereports');
const d_intendedprojects = require('./Routes/intendedprojects');
const d_policies = require('./Routes/policies');
const d_public = require('./Routes/public');
const d_volunteer = require('./Routes/volunteer');     */

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
// Cross Origin Request Security
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*"); // gives access to all clients
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // allow headers
  if (req.method === 'OPTIONS'){
      res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // allow these method to access API
      return res.status(200).json({});
  }
  next();
});

app.use(morgan('dev'));

  app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });
  app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

   //Listens for request
app.listen(3000,function(){
  console.log('Server is connected! Listening for requests');
});

  module.exports = app;