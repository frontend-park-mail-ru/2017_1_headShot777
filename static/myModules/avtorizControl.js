
// avtorizControl.js

function getAvtorizatObj()
{	
	let obj = new Object();
	
	obj.myQueryToAvtorization = function(script)
	{
		let requestMy = new XMLHttpRequest();
		requestMy.withCredentials = true;
		requestMy.open("GET",script,true);
		requestMy.send();
		requestMy.onreadystatechange = function()
		{
			if(requestMy.readyState === 4 && requestMy.status === 200) 
			{
				let renderObj = getObjectOfRendering();
				renderObj.initPlace('answer');
				
				if(requestMy.responseText == "YES")
				{
					let renderObjForChangeHTML = getObjectOfRendering();
					
					renderObjForChangeHTML.initPlace('box1');
					renderObjForChangeHTML.clearInformation();
					
					renderObjForChangeHTML.initPlace('myTitle');
					renderObjForChangeHTML.setInformation('Мой профиль');
					
					renderObjForChangeHTML.initPlace('myHeader');
					renderObjForChangeHTML.setInformation('Мой профиль');
					
					renderObjForChangeHTML.initPlace('mainImage');
					renderObjForChangeHTML.clearInformation();		

					renderObjForChangeHTML.initPlace('btnMeny');
					renderObjForChangeHTML.setInformation(menyString);		
				}
				else
				{
					renderObj.setInformation("Ошибка. Неверный логин или пароль.");
				}
			}
		}
	}
	
	obj.avtorizationFunction = function()
	{
		let renderObj = getObjectOfRendering();
		renderObj.initPlace('answer');
	
		let textLogin = document.getElementById('textLogin').value;
		let textPassword = document.getElementById('textPassword').value;
		
		let controlObj = getObjectOfControlLoginAndPassword();
		controlObj.initValues(textLogin, textPassword);
		
		let answerString = controlObj.getResultOfControl();
		
		if(answerString != 'OK')
		{
			renderObj.setInformation(answerString);
		}
		else
		{
			renderObj.clearInformation();
			let query = mainUrl + "type=" + 2 + "&login=" + textLogin + "&password=" + textPassword;
			this.myQueryToAvtorization(query);		
		}
	}
	
	return obj;
}
