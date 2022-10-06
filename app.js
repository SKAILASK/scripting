const express =require('express');
const mongoose= require('mongoose');
const bodyParser = require ('body-parser');
const path= require('path');

mongoose.connect('mongodb:/locaolhost:/expnodedb');

let db=mongoose.connection;

db.once('open',function(){
    console.log('Connection Open');
});

db.on('error',function(err){
    console.log(err);
});

const app =express();

app.set('view',path.join(_dirname,'value'));
app.set('view engine','pug');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let Employee = require('./Model/employee');

app.get('/',function(req,res){
    Employee.find({},function(err,employeedata){
        res.render('index',{
            title:'Express JS Demo',
            empData:employeeData
        });
    });
});

app.get('./home', function(req,res){
    res.render('home',{
        homeMsg:'This is my Home Page for Expree JS Application'
    });
});

app.get('/add',function(req, res){
    res.render('addEmployee',{
        addMsg:'Add Employee Route'
    });
});

app.post('/emp/adddata',function(req,res){
    let emp = new Employee();
    emp.empid = req.body.eid;
    emp.ename = req.body.ename;
    emp.empdept = req.body.edept;
    empsalary = req.body.esal;

    emp.save(function(err){
        console.log(err);
    })
})


app.listen(3000,function(){
    console.log('Server is running in port 3000');
})