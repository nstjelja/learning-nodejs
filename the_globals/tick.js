console.log(1);
var tick = 0;
process.nextTick(function(){
  tick++;
  console.log("Tick : "+tick);

});

for(var i=0; i<20; i++){
  console.log("Number : "+i);
}

var Person = require('./person.js');
var nikola = new Person("Nikola");
require('http').createServer(function(req,res){
  nikola.sayMyName();
  res.end("a");
}).listen(3000);
 
