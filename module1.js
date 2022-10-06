 function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}
module.exports.add = add
module.exports.sub = sub

 var obj = require('./A2.js')

result = obj.add(7,8)
result1 = obj.sub(10,8)

console.log(result)
console.log(result1)