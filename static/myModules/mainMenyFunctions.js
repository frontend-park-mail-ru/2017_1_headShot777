	
	// mainMenyFunctions.js
	
	function exitOut()
	{
		window.location = 'index.html';
	}
	
	function gameRules()
	{
		let renderObj = getObjectOfRendering();
		renderObj.initPlace('contentResult');
		renderObj.setInformation(gameRulesString);
	}
	
	function myQueryListOfUsers(script) 
	{
		let renderObj = getObjectOfRendering();
		renderObj.initPlace('contentResult');
		renderObj.setInformation("<h3>Список всех пользователей</h3>");
	
		let requestMy = new XMLHttpRequest();
		requestMy.withCredentials = true;
		requestMy.open("GET",script,true);
		requestMy.send();
		requestMy.onreadystatechange = function() 
		{
			if(requestMy.readyState === 4 && requestMy.status === 200) 
			{
				let s = requestMy.responseText + "";
				let mass = new Array();
				mass = s.split("_");
				s = "";
				let n = mass.length;
				for(let i = 0; i < n; i++) 
				{
					if( (mass[i] + "") != "") s += ("<li>" + mass[i] + "</li>");
				}
				s = "<ul>" + s + "</ul><br><br>";
				renderObj.appendInformation(s);		
			}
		}
	}
	
	function listOfUsers()
	{
		myQueryListOfUsers(mainUrl + "type=" + 3);
	}
	