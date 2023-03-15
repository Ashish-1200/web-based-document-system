const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require ('cors');
const path = require ('path');
mongoose.set('strictQuery', false );
const app = express();
const multer = require('multer');

//app.listen(3000,(error)=>console.log(error));



//sets up the middleware to parse incoming request bodies in JSON format
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Used to log requests
const morgan = require('morgan');
app.use(morgan('dev'));

//Cross-Origin Resource Sharing (CORS) middleware
app.use(cors());

//Connection to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/docsystem')
.then(() => console.log("Database is connected"))
.catch((error) => console.log(error));

//Configure multer to store files in the "uploads" directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });



//serve the static files located in the "images" and "uploads" directories

app.use('/uploads',express.static('uploads'));

/* //Importing Schema models
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
const volunteer = require("./models/volunteer.m"); */



//Routes
const wbusers = require('./Routes/users');
const wbadmin = require('./Routes/admin');
const wbequipmentinventory = require('./Routes/equipmentinventory');
const wbevent = require('./Routes/event');
const wbfinancialreports = require('./Routes/financialreport');
const wbincidentreports = require('./Routes/incidentreport');
const wbinsurancereports = require('./Routes/insurancereports');
const wbintendedprojects = require('./Routes/intendedprojects');
const wbpolicies = require('./Routes/policies');
const wbpublic = require('./Routes/public');
const wbvolunteer = require('./Routes/volunteer');     

app.use('/users', wbusers);
app.use('/admin', wbadmin);
app.use('/equipmentinventory', wbequipmentinventory);
app.use('/event', wbevent);
app.use('/financialreport', wbfinancialreports);
app.use('/incidentreport', wbincidentreports);
app.use('/insurancereports', wbinsurancereports);
app.use('/intendedprojects', wbintendedprojects);
app.use('/policies', wbpolicies);
app.use('/public', wbpublic);
app.use('/volunteer', wbvolunteer);


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