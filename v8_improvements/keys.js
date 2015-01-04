var a = {a:"a", c:"c"};
Object.prototype.b="b";

for(var property in a){
  if (a.hasOwnProperty(property)){
    console.log("Propery " + property + " Is part of a");
    continue;
  }

  console.log("Propery " + property + " Is not part of a");

}

var keys = Object.keys(a);
