var setPropertiesOnObjLiteral = function(obj){
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = function(num){
    return num + 1;
  };
};

var setPropertiesOnArrayObj = function(arr){
  arr.hello = function(){
    return "Hello!";
  };
  arr.full = "stack";
  arr[0] = 5;
  arr.twoTimes = function(num){
    return num * 2;
  };
};

var setPropertiesOnFunctionObj = function(functionObject){
  functionObject = function(){
    return functionObject();
  };
  functionObject.year = 2015;
  functionObject.divideByTwo = function(num){
    return num / 2;
  };
  functionObject.prototype.helloWorld = function(){
    return "Hello World";
  };
};
