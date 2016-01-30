function CreateRow(car) {
	var row = document.createElement('div'), field;

	for (var key in car) {
		field = document.createElement('span');
		field.innerText = car[key];
		row.appendChild(field);
	}

	return row;
}


function CreateTable() {
	var row;
	var container = document.getElementById('container');

	for (var i = 0; i < cars.length; i++) {
		row = CreateRow(cars[i]);
		container.appendChild(row);

	}
}	

CreateTable();

