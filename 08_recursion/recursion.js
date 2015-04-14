var factorialIterative = function(num){
  var total = 1;
  for(var i = num; i > 1; i--){
  	total = total * i;
  }
  return total;
}

var factorial = function(num){
	if(num <= 0){
		return 1;
	};
	
    return num * factorial(num-1);

}

var fib = function(num){
	if(num <= 1){
		return 1;
	};
	return fib(num - 1) + fib(num - 2);
}

var type = function(input){
  var typeStr = Object.prototype.toString.call(input);
  var typeArr = typeStr.split(" ");
  return typeArr[1].slice(0, -1)
}

var stringify = function(input){
  var out = "";
  if(type(input) == 'Array'){
    out += "[";
    for(var i=0; i < input.length; i++){
      out += stringify(input[i]) + ",";
    }
    out = out.slice(0,-1);
    out += "]";
  }
  else if (type(input) == 'Object') {
    out += "{"
    for (var key in input) {
      out += '"' + key + '": ' + stringify(input[key]) + ",";
    }
    out = out.slice(0,-1);
    out += "}"
  }
  else if(type(input) == 'String'){
      return '"'+ input +'"';
  }
  else {
    return String(input);
  }
  return out;
}
   