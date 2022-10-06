var buffer=new Buffer(6);
buffer.write('Rohit');
console.log(buffer.toString('utf8'));
console.log(buffer.toString('utf8',0,3));
console.log(buffer.toJSON('nodejs'));