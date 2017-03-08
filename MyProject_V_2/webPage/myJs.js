
var myUrl = "http://localhost:5100/?";

var btnMenyString;
const gameRulesString = "<h3>Правила игры</h3><p>Во время игры два игрока сражаются друг с другом.<br>Задачей каждого из игроков является уничтожение своего соперника.<br>Управление осуществляется посредством клавиатуры и мышки.</p>";

window.onload = function()
{
	localStorage.removeItem("login");
	localStorage.removeItem("password");
	btnMenyString = document.getElementById('btnMeny').innerHTML;
	document.getElementById('btnMeny').innerHTML = "";
}

function myQueryRegistration(script)
{
	var r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function()
	{
		if(r.readyState === 4 && r.status === 200) 
		{
			let s = r.responseText + "";
			if(s == 'YES') document.getElementById('answer').innerHTML = "Регистрация прошла успешно.";
			if(s == 'NO') document.getElementById('answer').innerHTML = "Ошибка. Такой пользователь уже есть в БД.";
			if(s == 'EMPTY') document.getElementById('answer').innerHTML = "Ошибка. Поле ввода пусто.";
			if(s == 'NOCORRECT') document.getElementById('answer').innerHTML = "Ошибка. Некорректный ввод.";
		}
	}
}

function myQueryAvtorization(script)
{
	var r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function()
	{
		if(r.readyState === 4 && r.status === 200) 
		{
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


function regF()
{
	let textLogin = document.getElementById('textLogin').value + "";
	let textPassword = document.getElementById('textPassword').value + "";
	
	var myObj = {
		t: "",
		x: "",
		y: ""
	};
	
	myObj.t = "1";
	myObj.x = textLogin;
	myObj.y = textPassword;
	
	myQueryRegistration( myUrl + JSON.stringify(myObj) );
}

function goF()
{
	let textLogin = document.getElementById('textLogin').value + "";
	let textPassword = document.getElementById('textPassword').value + "";
	
	var myObj = {
		t: "",
		x: "",
		y: ""
	};
	
	myObj.t = "2";
	myObj.x = textLogin;
	myObj.y = textPassword;
	
	myQueryAvtorization( myUrl + JSON.stringify(myObj) );
}

function goToMyProfileMode(login,password)
{
	document.getElementById('mainImage').innerHTML = "";
	document.getElementById('myTitle').innerHTML = "Мой профиль";
	document.getElementById('myHeader').innerHTML = "Мой профиль";
	document.getElementById('box1').innerHTML = "<h2>Пользователь: " + login + "</h2><br>" ;
	localStorage.setItem("login",login + "");
	localStorage.setItem("password",password + "");
	document.getElementById('btnMeny').innerHTML = btnMenyString;
}

function gameRules()
{
	document.getElementById('contentResult').innerHTML = gameRulesString;	
}

function myQueryListOfUsers(script)
{
	var r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function()
	{
		if(r.readyState === 4 && r.status === 200) 
		{
			let s = r.responseText + "";
			var mass = new Array();
			mass = s.split("_");
			document.getElementById('contentResult').innerHTML = "<h3>Список всех пользователей</h3>";
			s = "";
			let n = mass.length;
			for(let i = 0; i < n; i++)
			{
				if( (mass[i] + "") != "") s += ("<li>" + mass[i] + "</li>");
			}
			s = "<ul>" + s + "</ul><br><br>";
			document.getElementById('contentResult').innerHTML += s;			
		}
	}
}

function listOfUsers()
{
	var myObj = {
		t: "3"
	};
	
	myQueryListOfUsers( myUrl + JSON.stringify(myObj) )
}

function exitOut()
{
	window.location = "main.html";
}
