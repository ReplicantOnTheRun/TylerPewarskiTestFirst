var RPNCalculator = function(){
  this.stackArray = [];
  this.total = 0;
  this.errorMessage = "rpnCalculator is empty";
};

RPNCalculator.prototype.value = function(){
 return this.total;
};

RPNCalculator.prototype.push = function(num){
  this.stackArray.push(num);
};

RPNCalculator.prototype.plus = function(){
  if(this.stackArray.length === 0){
    throw this.errorMessage;
  };

  var tempTotal = 0;
  tempTotal = this.stackArray.pop();
  tempTotal += this.stackArray.pop();
  this.stackArray.push(tempTotal);
  this.total = tempTotal;
};

RPNCalculator.prototype.minus = function(){
  if(this.stackArray.length === 0){
    throw this.errorMessage;
  };

  var tempTotal = 0;
//we are subtracting the top of the stack from the term after it
  tempTotal -= this.stackArray.pop();
  tempTotal += this.stackArray.pop();
  this.stackArray.push(tempTotal);
  this.total = tempTotal;
};

RPNCalculator.prototype.divide = function(){
  if(this.stackArray.length === 0){
    throw this.errorMessage;
  };

  var divisor = this.stackArray.pop();
  var quotient = this.stackArray.pop() / divisor;
  this.stackArray.push(quotient);
  this.total = quotient;
};

RPNCalculator.prototype.times = function(){
  if(this.stackArray.length === 0){
    throw this.errorMessage;
  };

  var product = this.stackArray.pop();
  product = product * this.stackArray.pop();
  this.stackArray.push(product);
  this.total = product;
};
 

