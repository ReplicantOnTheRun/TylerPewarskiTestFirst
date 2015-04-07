function repeat(word, times){
   var logString = "";
   for(var i = 0; i < times; i++){
   	 logString += word;
   };
   return logString;
};

function sum(arr){
	var total = 0;
	for(var i=0; i<arr.length; i++){
		total += arr[i];
	}
	return total;
}

function gridGenerator(num){
  
  var finalStr = "";

  for(var i=0; i<num; i++){
  	for(var j=0; j<num; j++){
  		if((j+i)%2 == 0){
  			finalStr += "#";
  		} else {
  			finalStr += " ";
  		};
  		
  	};
    finalStr += "\n";
  };
  return finalStr;
};

function largestTriplet(num){
	arr = [];
	for(var i= num; i>0; i--){
		for(var j=i-1; j>0; j--){
			for(var k=i-1; k>0; k--){
				if(i*i == j*j + k*k){
                    arr.push(k);
                    arr.push(j);
                    arr.push(i);
                    return arr;
				};
			};
		};
	};
};

function join(arr, delim){
  var finalStr = "";
    if(delim === undefined){
	  for(var i=0; i<arr.length; i++){
	    finalStr += arr[i];
	  };
	} else{
		for(var i=0; i<arr.length; i++){
			finalStr += arr[i];
			if(i<arr.length - 1){finalStr += delim};
		};
	};
  return finalStr;
};

function paramify(obj) {
	var finalStr = "";
	var arr = [];

	for(var prop in obj) {
		if(obj.hasOwnProperty(prop)) {
			arr.push(prop + "=" + obj[prop]);
		};
	};

	arr.sort();

	for(var i=0; i<arr.length; i++) {
		finalStr += arr[i];
		if(i<arr.length - 1) {
			finalStr += "&";
		};
	};

	return finalStr;
}








