	
	let mainUrl = "http://localhost:5000/game?";
	let menyString = document.getElementById('btnMeny').innerHTML;
	const gameRulesString = "<h3>Правила игры</h3><p>Во время игры два игрока сражаются друг с другом.<br>Задачей каждого из игроков является уничтожение своего соперника.<br>Управление осуществляется посредством клавиатуры и мышки.</p>";
	document.getElementById('btnMeny').innerHTML = "";
	
	function registrMan()
	{
		let regObj = getObjectOfRegistration();
		regObj.registrationFunction();
	}
	
	function avtorizMan()
	{
		let avtObj = getAvtorizatObj();
		avtObj.avtorizationFunction();
	}