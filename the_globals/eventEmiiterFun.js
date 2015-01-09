var events = require('events');
var util = require('util');

function MyType(){
  this.Name = "";
}

MyType.prototype.__proto__ = events.EventEmitter.prototype;
MyType.prototype.setName = function setName(name){
  this.Name = name;
  this.emit("nameSet", new Date());
}

var my = new MyType();
my.on('nameSet', function(date){
   console.log(date + " - Name set to: " + this.Name); //This reffers to the event emiiter instance
   console.log();
}).on('nameSet', function(date){
  console.log("It really was set")
}).on('nameSet', function(date){
  console.log('ajaoja');
});

my.setName("nikola");

var listeners = my.listeners('nameSet');

console.log(util.inspect(listeners));
