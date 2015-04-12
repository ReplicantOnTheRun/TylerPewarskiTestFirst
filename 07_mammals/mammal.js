//mammal
var Mammal = function(name){
	this.name = name;
	this.offspring = [];
}
Mammal.prototype.sayHello = function(){
	return "My name is " + this.name + ", I'm a Mammal"	
}

Mammal.prototype.haveBaby = function(){
	var babyMam = new Mammal("Baby " + this.name);
	this.offspring.push(babyMam);
	return babyMam; 
}



var Cat = function(name, color){
	Mammal.call(this, name);
	this.color = color;
}

Cat.prototype.haveBaby = function(color){
	var babyCat = new Cat("Baby " + this.name, color);
	this.offspring.push(babyCat);
	return babyCat;
}