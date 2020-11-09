var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var empModel = require('../model/employee');
var router = express.Router();


var encoder= bodyParser.urlencoded({ extended: true });

var employee=empModel.find({});

/* GET home page. */
router.get('/', function(req, res, next) {
employee.exec(function(err,data){
 /* console.log(data);*/
  if(err) throw error;

  res.render('index', { title: 'Employee', records:data});
})

});

router.get('/about', function(req, res, next) {
  employee.exec(function(err,data){
   /* console.log(data);*/
    if(err) throw error;
  
    res.render('about');
  })
  
  });




/* router.post('/', function(req, res, next) {
  console.log('hello try and check' +req);
  var empDetails = new empModel({
     name: req.body.name,
     
    email: req.body.email,
    etype: req.body.etype,
    hourlyrate: req.body.hourlyrate,
    totalHours:res.req.totalHours,
  /* total: parseInt(req.body.hourlyrate) * parseInt(req.body.totalHours),  


  });
  console.log(empDetails);  

  

});  */

      

router.post('/',encoder, function(req, res, next) {
  console.warn(req.body);
  console.log('hello try and check' +req.body);
  
  var empDetails = new empModel({
     name: req.body.name,
     
    email: req.body.email,
    etype: req.body.etype,
    hourlyrate: req.body.hourlyrate,
    totalHours:req.body.totalHours,
  /* total: parseInt(req.body.hourlyrate) * parseInt(req.body.totalHours),  */

  });
  next();
  console.log(empDetails);
  

});
  
  


module.exports = router;
