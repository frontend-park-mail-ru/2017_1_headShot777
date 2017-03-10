
let myUrl = "http://localhost:5100/?";

let btnMenyString;
const gameRulesString = "<h3>Правила игры</h3><p>Во время игры два игрока сражаются друг с другом.<br>Задачей каждого из игроков является уничтожение своего соперника.<br>Управление осуществляется посредством клавиатуры и мышки.</p>";

window.onload = function() {
	localStorage.removeItem("login");
	localStorage.removeItem("password");
	btnMenyString = document.getElementById('btnMeny').innerHTML;
	document.getElementById('btnMeny').innerHTML = "";
}

