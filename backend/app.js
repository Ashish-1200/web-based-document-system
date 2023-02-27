const express = require ('express');
//const bodyParser = require('body-parser');
const api = express();
api.listen(3000,(error)=>console.log(error));

// add an entry way / -root
// add cors 
// add mongoose