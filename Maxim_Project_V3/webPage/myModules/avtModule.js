function myQueryAvtorization(script) {
	let r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function() {
		if(r.readyState === 4 && r.status === 200) {
			let s = r.responseText + "";
			if(s == 'YES')
			{
				goToMyProfileMode(document.getElementById('textLogin').value, document.getElementById('textPassword').value);
			}
			if(s == 'NO') document.getElementById('answer').innerHTML = "Ошибка. Неверный логин или пароль.";
			if(s == 'EMPTY') document.getElementById('answer').innerHTML = "Ошибка. Поле ввода пусто.";
			if(s == 'NOCORRECT') document.getElementById('answer').innerHTML = "Ошибка. Некорректный ввод.";
		}
	}
}


function goF() {
	let textLogin = document.getElementById('textLogin').value + "";
	let textPassword = document.getElementById('textPassword').value + "";
	
	let myObj = {
		t: "",
		x: "",
		y: ""
	};
	
	myObj.t = "2";
	myObj.x = textLogin;
	myObj.y = textPassword;
	
	myQueryAvtorization( myUrl + JSON.stringify(myObj) );
}

function goToMyProfileMode(login,password) {
	document.getElementById('mainImage').innerHTML = "";
	document.getElementById('myTitle').innerHTML = "Мой профиль";
	document.getElementById('myHeader').innerHTML = "Мой профиль";
	document.getElementById('box1').innerHTML = "<h2>Пользователь: " + login + "</h2><br>" ;
	localStorage.setItem("login",login + "");
	localStorage.setItem("password",password + "");
	document.getElementById('btnMeny').innerHTML = btnMenyString;
}