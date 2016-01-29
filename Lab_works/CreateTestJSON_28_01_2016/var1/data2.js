
(function() {
	var test = '[' +
	'{"question":"What is your name?","type":"input"},' +
	'{"question":"Are you working?", "type": "select","answers":["yes","no"]},' +
	'{"question":"Will you be on occupation jn saturday?","type":"select","answers":["yes","no","may be"]}' +
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
		var rightAnswers = ['tr'];
		var j = 0;
		var stage = document.begin.elements;
		for (var i = 0; i < stage.length; i++) {
			arrAnswers[i] = stage[i].value;
			
			if (rightAnswers[i] == arrAnswers[i]) { // compare user's answers with right answers
				j++;
			}
		}
		console.log(arrAnswers);
		console.log(j);
	}
	document.getElementById("button").addEventListener("click",UsersAnswers);

	// create array with right answers
	

}) ();	