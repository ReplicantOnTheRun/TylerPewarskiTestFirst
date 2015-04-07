// 06_Functional 
function doubler(num){
  return num * 2;
}

function map(arr, func){
	var newArr = [];
	for(var i=0; i<arr.length; i++){
		newArr.push(func(arr[i]))
	}
	return newArr;
}

function filter(arr, func){
  var newArr = [];
  for(var i = 0; i<arr.length; i++){
    if(func(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

function contains(collection, val) {
	if (typeof collection === 'object') {
		for (var prop in collection) {
			if (collection[prop] === val)
				return true;
		}
	} else {
		for (var i = 0; i < collection.length; i++) {
			if (collection[i] === val) {
				return true;
			}
		}
	}
	return false;
}

function countWords(str){
  var arr = str.split(" ");
  return arr.length;
}

function reduce(array, start, func) {
	var current = start;
  	for (var i = 0; i < array.length; i++){
    	current = func(current, array[i]);
    };
	return current;
}

function countWordsInReduce(a, b){
	var c = 0;
	var d = b.split(" ");
	for(var i=0; i<d.length; i++){
		c++;
	};
	return a+c;

}


function sum(arr){
	return reduce(arr, 0, function(current, next){ 
		return current +next;});


}

function every(array, func) {
	for (var i = 0; i < array.length; i++) {
		if (func(array[i]) === false)
			return false;
	}
	return true;
}


function any(array, func) {
	if (func === undefined) {
		for (var i = 0; i < array.length; i++) {
			if (array[i] === true)
				return true;
		}		
	} else {
		for (var i = 0; i < array.length; i++) {
			if (func(array[i]) === true)
				return true;
		}
	}
	return false;
}








