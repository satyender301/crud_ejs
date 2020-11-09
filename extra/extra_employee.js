const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/employee', { useNewUrlParser: true, 
useCreateIndex: true, 
useUnifiedTopology: true } );

var conn = mongoose.connection;

var employeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    etype: String,
    hourlyrate: Number,
    totalHours: Number,
    total: Number,
});


employeeSchema.methods.totalSalary=function(){
    return this.hourlyrate* this.totalHours;
}
var employeeModel = mongoose.model('Employees',employeeSchema);

var employees= new employeeModel({
 name:'karan',
email:'karan@gmail.com',
etype:'hourly',
hourlyrate:2,
totalHours:16,

});

employees.total= employees.totalSalary();

conn.on("connected",function(){
    console.log("connected Succesfully");
});

conn.on("disconnected",function(){
    console.log("disconnected Successfully");
});

conn.on("error",console.error.bind(console,'connection error:'));

conn.once('open', function() {

 // employees.save(function(err,res){
      //  if(err){
        //    console.log(err);
      //  } 
        /*throw error; */ 

      //   console.log(res);
         
       //  conn.close();
    // }); 

   /*  employees.save(function(err,result){ 
        if (err){ 
            console.log(err); 
        } 
        else{ 
            console.log(result) 
        } 
  });  */

  employeeModel.find({name:"karan"}, function(err, data){
      if(err) throw error;
      console.log(data);
      conn.close();
  } );


});

module.exports= employeeModel;



(function(err,req1){
    if(err) throw err;

   
  });