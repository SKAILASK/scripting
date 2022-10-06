const event=require('events');
const util=require('util');

var Person= function(name){
	this.name=name;
}

util.inherits(Person,event.EventEmitter);

var person1=new Person("sanket");
var person2=new Person("shivani");
var person3=new Person("Shruti");

var people=[person1,person2,person3];

people.forEach(function(person){
	person.on('dep',function(msg){
		console.log(person.name+' department is '+msg)
	});
});


person1.emit('dep','JAVA');
person2.emit('dep','SQL');
person3.emit('dep','JS');