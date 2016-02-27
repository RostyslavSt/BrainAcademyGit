
//http://jscourse.com/tasks/

// 1.Task
function someFunc(options) {
	return {
		index: options && options.index ? options.index : 0,
		animate: options && options.animate ? options.animate : false
	}
}

// or
function someFunc(options) {
	var defaultOptions = {
		index: 0,
		animate: false
	};
	
	if (!options) {
		return defaultOptions;
			}
	
	return {
		index: options.index || defaultOptions.index,
		animate: options.animate || defaultOptions.animate
	}
	
				
}

// END first task

// 2. Task
function objectToQueryString(object) {
		var array = [];
		for (var key in object) {
		var	string = encodeURIComponent(key) + '=' + encodeURIComponent(object[key]);
		array.push(string);
		}
	
	return array.join('&');
	
}

// 

// task 3
function queryStringToObject(queryString) {
	
	var arr = queryString.split('&');
	var result = {};
	
	if (!queryString.length) return result;
	
	for (var i = 0; i < arr.length; i++) {
		
		var arr2 = arr[i].split('=');
		
		arr2[1] = decodeURIComponent(arr2[1]);
		
		if (arr2[1] == 'true') {
			arr2[1] = true;
	} 
		else	if (arr2[1] == 'false') {
			arr2[1] = false;
	} 
		else if (+arr2[1]) {
			arr2[1] = +arr2[1];
	} 
		
		result[arr2[0]] = arr2[1];
		
	}
	
	 return result;
}

// end task 3

// Task 4

function findLongestPalindrome(str) {
	var palindrom = '';
	var sub = '';
	str = str.toLowerCase();
	str = str.split(' ').join('');
	
	for (var i = 0; i < str.length; i++) {
		for (var j = str.length; j > i; j--){
			sub = str.substr(i, j + i);
			
			if (sub === sub.split('').reverse().join('') && sub.length > palindrom.length)			{
			  palindrom = sub;
			}
				
		
		}
		
	
	}
	
	return palindrom;
	
}
