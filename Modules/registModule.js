function myQueryReg(script)
{
	let r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function()
	{
		if(r.readyState === 4 && r.status === 200) 
		{
			const ansRequest = r.responseText + "";
			
			if(ansRequest == 'YES') 
			{
				document.getElementById('message').innerHTML = "Регистрация прошла успешно.<br>";
				document.getElementById('edit3').value = "";
				document.getElementById('edit4').value = "";
			}
			
			if(ansRequest == 'NO') document.getElementById('message').innerHTML = "Такой пользователь уже есть в базе данных. Придумайте другой логин.<br>";
		}
	}
}


function reg()
{
	document.getElementById('message').innerHTML = "";

	let log = document.getElementById('edit3').value + "";
	let pas = document.getElementById('edit4').value + "";
	
	let mess;
	
	mess = normalString(log);
	if(mess == 'EMPTY') document.getElementById('message').innerHTML += "Поле ввода логина пусто.<br>";
	if(mess == 'BAD') document.getElementById('message').innerHTML += "Поле ввода логина содержит запретные символы.<br>";
	
	mess = normalString(pas);
	if(mess == 'EMPTY') document.getElementById('message').innerHTML += "Поле ввода пароля пусто.<br>";
	if(mess == 'BAD') document.getElementById('message').innerHTML += "Поле ввода пароля содержит запретные символы.<br>";
	
	if( document.getElementById('message').innerHTML != "" ) return;
	
	const s = "myPHP/scr1.php?login=" + log + "&password=" + pas;
	myQueryReg(s);
}

