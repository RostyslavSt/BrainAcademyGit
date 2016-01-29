

//Домашнее задание
var users = [
			{name:'john', pass:'333'}, 
			{name:'mike', pass:'555'},
			{name:'tom', pass:'111'}
			];

document.submit.addEventListener("submit",function(event) {
	var userFound;

		event.preventDefault();
	if (this.userName.value == '') {
		document.getElementById("usReq").style.display='inline';
	} else {
		document.getElementById("usReq").style.display='none'; 
	}

	if (this.userPass.value == '') {
		document.getElementById("passReq").style.display='inline';
	} else {
		document.getElementById("passReq").style.display='none'; 
	}
	// проверяем наличие пользователя в базе данных	
	for (var i = 0; i < users.length; i++) {
		if (this.userName.value === users[i].name && this.userPass.value === users[i].pass) {
			userFound = true;
		}
	}


			alert(userFound ? 'Thanks for your visit' : 'We cannot found such user with this password');


})
//-------------------------------------------------------------------------			