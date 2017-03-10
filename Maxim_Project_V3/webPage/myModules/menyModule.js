function gameRules() {
	document.getElementById('contentResult').innerHTML = gameRulesString;	
}

function myQueryListOfUsers(script) {
	let r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function() {
		if(r.readyState === 4 && r.status === 200) {
			let s = r.responseText + "";
			let mass = new Array();
			mass = s.split("_");
			document.getElementById('contentResult').innerHTML = "<h3>Список всех пользователей</h3>";
			s = "";
			let n = mass.length;
			for(let i = 0; i < n; i++) {
				if( (mass[i] + "") != "") s += ("<li>" + mass[i] + "</li>");
			}
			s = "<ul>" + s + "</ul><br><br>";
			document.getElementById('contentResult').innerHTML += s;			
		}
	}
}

function listOfUsers() {
	let myObj = {
		t: "3"
	};
	
	myQueryListOfUsers( myUrl + JSON.stringify(myObj) )
}

function exitOut() {
	window.location = "main.html";
}
