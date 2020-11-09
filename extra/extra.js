(function(err,res){
    if(err) throw error;  
     console.log(res);
     
     conn.close();
 })





 employeeSchema.methods.totalSalary=function(){
    return parseInt(this.hourlyrate)* parseInt(this.totalHour);
}



 employees.total= employees.totalSalary();