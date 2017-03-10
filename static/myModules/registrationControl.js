// registrationControl.js

function getObjectOfRegistration()
{
		let obj = new Object();
	
		obj.myQueryToRegistration = function(script)
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
							renderObj.setInformation("Регистрация прошла успешно.");
						else
							renderObj.setInformation("Ошибка. Пользователь с таким логином уже есть в БД.");
					}
				}
		}

		obj.registrationFunction = function()	
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
					let query = mainUrl + "type=" + 1 + "&login=" + textLogin + "&password=" + textPassword;
					this.myQueryToRegistration(query);		
				}
		}
		
		return obj;
}
	