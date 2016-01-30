
require(['data','generator','jquery'], function(cars, generator,$) {
	console.log($);
	//console.log(cars);
	generator(cars);
	$('body').css("background","blue");
	
});


