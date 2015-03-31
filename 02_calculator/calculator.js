var createCalculator = function(){
  var myCalc = {};

  myCalc.total = 0;
  myCalc.value = function(){
    return this.total;
  };
  myCalc.add = function(num){
    this.total = this.total + num;
  };
  myCalc.subtract = function(num){
    this.total = this.total - num;
  };
  return myCalc;
};

