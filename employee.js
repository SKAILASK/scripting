let mongoose=require('mongoose');

let EmployeeSchema= mongoose.Schema({
    empid:{
        type:Number,
        require:true
    },
    empname:{
        type:String,
        require:true
    },
    empdept:{
        type:String,
        require:true
    },
    empsalary:{
        type:Number,
        require:true
    }
},{
    collection:'employeedata'
});

let Employee=module.exports= mongoose.model('Employee',EmployeeSchema);