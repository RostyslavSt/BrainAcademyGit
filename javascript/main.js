/*var mark = +prompt("ВВедите ваше количество балов от 0 до 100", '');
if (mark <= 100 && mark >= 95) {
	alert('Ваша оценка А');
	} else if (mark <= 94 && mark >= 85) {
		alert('Ваша оценка B');
	} else if (mark <= 84 && mark >= 75){
		alert('Ваша оценка c');
		} else if (mark <= 74 && mark >= 65){
			alert('Ваша оценка d');
		} else if (mark <= 64 && mark >= 60){
			alert('Ваша оценка e');
		} else if (mark <= 59 && mark >= 0){
			alert('Ваша оценка fx');
		}else if (mark > 100 || mark < 0){
				alert('Вы ввели некорректные данные. Введите от 0 до 100');
		} else if (isNaN(mark)) {
				alert('В34343430');
			}




//alert(b);
i = 5;
arr
for (; i--;) {
	var mark = +prompt('Введите оценку:', '')
	if (mark < 60) {
		alert('прекращаем программу');
		break;
	} 
}

alert ('переходим к циклу while')
i = 5;

while (i--) {
	var mark = +prompt('Введите оценку:', '')
	if (mark < 60) {
		alert('прекращаем программу');
		break;
	}
}*/

/*var i = true;
var result = 0;
while (i) {
	var a = +prompt('введите первое число', '');
	var b = +prompt('введите второе число', '');
	var oper = prompt('Что вы хотите предпринять: 	1. Сложить 	2. Вычесть 	3. Умножить 4. Разделить');
	
	switch (oper) {
		case '1' : 
			result = a + b;
			break;
		case '2' : 
			result = a - b;
			break;
		case '3' : 
			result = a * b;
			break;
		case '4' : 
			result = a / b;
			break;
		default : 
		alert('Вы ввели неправильную операцию');
			break;	
	}
				
	alert('Результат вычиcлений равен: ' + result);
	i = confirm('Вы хотите продолжить?');
}

/*if (oper == '1') {
		result = a + b;
	}	else if (oper == '2') {
		result = a - b;
	}	else if (oper == '3')	{
		result = a * b;
	}	else if (oper == '4')	{
		result = a / b; 
		
		
		var b = [1, 10, 20];
		console.log(b);  */
		
		
		/*var arr = [3, 4, 5, 8];
		var newArr = arr.reduce(result(element) {
			return result > element ? result = element : result = 0;
		}, 0);
		console.log(newArr);*/
		
		
		/*var myCar = {
				color: 'black',
				model: 'mazda'
			};
		
		for (key in myCar) {
			console.log(key + ': ' + myCar[key]);
					}
		console.log()*/
		
		
		/*var cars = [];
		var newcars = [];
		var i = 0;
		var colors = [red,]
		var name, modelName, engine;
		var car = {};
		
		for (;i < 1; i++) {
			name = prompt('Введите имя машины', '');
			modelName = prompt('Введите модель машины: ', '');
			engine = prompt('Введите объем двигателя машины: ', '');
			engine = parseFloat(engine);
			car = {name1: name,
					modelName1: modelName,
					engine1: engine
								}
			cars.push(car);
			console.log(car);
			}
		
	
		
		newcars = cars.filter(function(el) {
		return el.engine1 > 2;
		});
		
		console.log(newcars); */
		
		
		
		
		
		/*function tt(){
			return function(a, b) {
				return a*b;
			}
		}
		
		var f = tt();
		
		console.log(f(4, 5)); */
		
		/*var  car = {name:'toyota',
					model:'camry',
					color:'black',
					fullCar: function(){
						console.log(this);
					}
					}
					
					car.fullCar;*/
					
function ff() {
	console.log(arguments.length, arguments[0]);
	}					
  
  ff(5,6,7,8);	
		
		function ff() {
	console.log(arguments);
  var a = [].join.call(arguments, ' ');
  var c = arguments.length;
  console.log(a);
  
  return a,c;
	}					
  
var b = ff(5,6,7,8);
console.log(b);
		
		
		






