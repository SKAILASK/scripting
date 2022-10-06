var result=(function(){

    var arrayemp=[];
    var empId,empName,empSal;


    var Employee=function(id,name,sal){
        this.empId=id;
        this.empName=name;
        this.empSal=sal;
    }
    set=function(emp){
        arrayemp.push(emp)
    }

    display=function(){
        for(e in arrayemp){
            console.log("the id is"+arrayemp[e].empId)
            console.log("the name is"+arrayemp[e].empName)
            console.log("the sal is"+arrayemp[e].empSal)
        }

    }
    return{
        set,
        display,
        data:Employee
    }


})();
module.exports=result;