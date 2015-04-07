function concat_string(){
	var finalStr = '';
	for(var i=0; i<arguments.length; i++){
		finalStr += arguments[i];
	};
	return finalStr;
}

function yourFunctionRunner(){
	var finalStr = "";
	for(var i=0; i<arguments.length; i++){
		finalStr += arguments[i]();
	};
	return finalStr;
}

function makeAdder(A){
    function newFunc(arg){
    	return arg + A;
    };
    return newFunc;
}

function once(func){
	var times = 0;
	function increment(){
		if(times == 0){
			func();
			times++;
		};
	};
	return increment;
}

var counter = 0;
function createObjectWithTwoClosures(){
  Object = {};
  Object.oneIncrementer = function(){
  	counter += 1;
  };
  Object.tensIncrementer = function(){
  	counter += 10;
  };
  Object.getValue = function(){
  	return counter;
  };
  return Object;
}

	