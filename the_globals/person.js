function Person(name){
  this.Name = name;
}

Person.prototype.sayMyName = function(){
  console.log("My name is " + this.Name);
}

module.exports = Person;
