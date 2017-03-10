function myQueryRegistration(script) {
	let r = new XMLHttpRequest();   
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function() {
		if(r.readyState === 4 && r.status === 200) {
			let s = r.responseText + "";
			if(s == 'YES') document.getElementById('answer').innerHTML = "Регистрация прошла успешно.";
			if(s == 'NO') document.getElementById('answer').innerHTML = "Ошибка. Такой пользователь уже есть в БД.";
			if(s == 'EMPTY') document.getElementById('answer').innerHTML = "Ошибка. Поле ввода пусто.";
			if(s == 'NOCORRECT') document.getElementById('answer').innerHTML = "Ошибка. Некорректный ввод.";
		}
	}
}

function regF() {
	let textLogin = document.getElementById('textLogin').value + "";
	let textPassword = document.getElementById('textPassword').value + "";
	
	let myObj = {
		t: "",
		x: "",
		y: ""
	};
	
	myObj.t = "1";
	myObj.x = textLogin;
	myObj.y = textPassword;
	
	myQueryRegistration( myUrl + JSON.stringify(myObj) );
}