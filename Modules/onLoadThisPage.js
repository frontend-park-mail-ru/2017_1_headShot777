
window.onload = function()
{
	s1 = document.getElementById('box1').innerHTML;
	s2 = document.getElementById('box2').innerHTML;
	s3 = document.getElementById('box3').innerHTML;
	s4 = document.getElementById('box4').innerHTML;
	
	document.getElementById('box2').innerHTML = "";
	document.getElementById('box3').innerHTML = "";
	document.getElementById('box4').innerHTML = "";
	
	const myLog = localStorage.getItem("myLog");
	const myPas = localStorage.getItem("myPas");
	
	if(myLog == null || myPas == null)
	{
		// login and password are not saved
	}
	else
	{
		myQueryAvt("myPHP/scr2.php?login=" + myLog + "&password=" + myPas);
	}
}

function function_exit()
{
	localStorage.removeItem("myLog");
	localStorage.removeItem("myPas");
	window.location = "";
}


function show(x)
{
	document.getElementById('message').innerHTML = "";

	if(x == 1)
	{
		document.getElementById('box1').innerHTML = s1;
		document.getElementById('myHeader').innerHTML = 'Добро пожаловать';
	}
	
	if(x == 2)
	{
		document.getElementById('box1').innerHTML = s2;
		document.getElementById('myHeader').innerHTML = 'Авторизация';
	}
	
	if(x == 3)
	{
		document.getElementById('box1').innerHTML = s3;
		document.getElementById('myHeader').innerHTML = 'Регистрация';
	}
}

function startThisGame(k)
{
	document.getElementById('titlePic').style = "display:none";
	document.getElementById('message').innerHTML = "";
	
	document.getElementById('can').style = "display:block; padding-top: 30px;";
	document.getElementById('box1').innerHTML = "";
	document.getElementById('myHeader').innerHTML = "";
	
	kkkk = k;
	
	if(k == 1) createLevel_1();
	if(k == 2) createLevel_2();
	if(k == 3) createLevel_3();
	if(k == 4) createLevel_4();
	if(k == 5) createLevel_5();
	
	clearAll();
	drawHero();
	
	t1 = setInterval(heroInterval,50);
	t2 = setInterval(fireInterval,500);
}
