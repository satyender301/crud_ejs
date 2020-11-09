const express = require('express');
var bodyParser = require('body-parser')
var path = require('path');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app= express();
bodyParser.urlencoded({ extended: true });


app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(express.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);




 app.listen(9000,()=>{
    console.log('server started');
})  