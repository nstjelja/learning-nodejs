function Mammal(){}
function Dog(){}

Dog.prototype.__proto__ = Mammal.prototype;

console.log(Dog);
var stella = new Dog();
console.log(stella instanceof Mammal)
