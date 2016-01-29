
(function() {
	var test = '[' +
	//'{"question":"What is your name?","type":"input"},' +
	'{"question":"Тэг для заголовка", "type": "select","answers":["<h1>","<p>","<span>"]},' +
	'{"question":"Метод JSON для превращения строки в объект","type":"select","answers":["element","parse","create"]},' +
	'{"question":"Метод JSON для превращения объекта в строку","type":"select","answers":["element","parse","stringify"]},' +
	'{"question":"Метод превращающий строку в массив","type":"select","answers":["splice","split","connect"]}' +
	']';

	test = JSON.parse(test);
	console.log(test);

														//create one elements of form
	function CreateElement(test){
		var div = document.createElement("div");
		var label = document.createElement("label");
		var element;
		if (test.type == "input") {
			element = document.createElement("input");
		} else {
			element = document.createElement("select");
			Option(element,test.answers);
		}
		
		label.innerText = test.question;
		div.appendChild(label);
		div.appendChild(element);
		return div;

	}
														// create form
	for (var i = 0; i < test.length; i++) {
		var ask = CreateElement(test[i]);
		document.begin.appendChild(ask);
	}

														// adding options: "yes", "no", "may be"
	function Option(select,answers) {
		for (var i = 0; i < answers.length; i++) {
			var createOption = document.createElement("option");
			createOption.innerText = answers[i];
			select.appendChild(createOption);

		}
	}

														//create array with answers
	function UsersAnswers() {
		var arrAnswers = [];
		var rightAnswers = ['<h1>','parse','stringify','split']; 	// array with rigth answers
		var j = 0; 										//счетчик для начисления баллов за правильные ответы.
		var stage = document.begin.elements;
		for (var i = 0; i < stage.length; i++) {
			arrAnswers[i] = stage[i].value;

			if (rightAnswers[i] == arrAnswers[i]) { 	// compare user's answers with right answers
				j++;									// начисление баллов
			}
		}
		console.log(arrAnswers);
		console.log('Вы набрали: ' + j + ' баллов');
	}
	document.getElementById("button").addEventListener("click",UsersAnswers);

	// create array with right answers
	

}) ();	