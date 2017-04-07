

function game_rules()
{
	document.getElementById('message').innerHTML = "<font color = '#00FF00'><h3>Описание игры</h3></font>";	
	document.getElementById('message').innerHTML += "Вы  играйте  за  бойца  спецназа,  ведущего  бой  ";
	document.getElementById('message').innerHTML += " с  мутантами.<br><br> Вашей задачей является ";
	document.getElementById('message').innerHTML += " уничтожение всех  мутантов  на  определённой ";
	document.getElementById('message').innerHTML += " территории. <br><br> При  контакте  с  мутантом  главный ";
	document.getElementById('message').innerHTML += " герой погибает. <br><br>";
	document.getElementById('message').innerHTML += " Управление  осуществляется  посредством клавиш ";
	document.getElementById('message').innerHTML += " <br>W, A, S, D.<br><br>Для прекращения движения героя нажать любую другую клавишу.<br><br>Стрельбу по противнику боец ";
	document.getElementById('message').innerHTML += " ведёт сам. <br><br>";
}

function myQueryGetMyResult(script)
{
	let r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function()
	{
		if(r.readyState === 4 && r.status === 200)
		{
			const ans = r.responseText + "";
			
			let mass = new Array();
			mass = ans.split("_");
			
			let flag = false;
			
			const n = mass.length;			
			for(let i = 0; i < n; i++) 
			{
				mass[i] = parseInt(mass[i]);
				if(mass[i] > 0) flag = true;
			}
			
			if(flag == true)
			{
				if(mass[0] > 0) document.getElementById('message').innerHTML += "Пройден уровень: &nbsp  &nbsp Две стены боли <br>";
				if(mass[1] > 0) document.getElementById('message').innerHTML += "Пройден уровень: &nbsp  &nbsp Ущелье страха <br>";
				if(mass[2] > 0) document.getElementById('message').innerHTML += "Пройден уровень: &nbsp  &nbsp Последнее убежище <br>";
				if(mass[3] > 0) document.getElementById('message').innerHTML += "Пройден уровень: &nbsp  &nbsp Лабиринт смерти <br>";
				if(mass[4] > 0) document.getElementById('message').innerHTML += "Пройден уровень: &nbsp  &nbsp Бойня на поле <br>";
			}
			else
			{
				document.getElementById('message').innerHTML += "Пусто <br>";
			}
						
			document.getElementById('message').innerHTML += "<br><br>";
		}
	}
}

function my_achiv()
{
	let log = localStorage.getItem("myLog");
	let pas = localStorage.getItem("myPas");
		
	document.getElementById('message').innerHTML = "<font color = '#00FF00'><h3>Мои достижения</h3></font>";
	myQueryGetMyResult("myPHP/scr4.php?login=" + log + "&password=" + pas);
}

function printLevels()
{
	document.getElementById('message').innerHTML = "<font color = '#00FF00'><h3>Выбор карты игры</h3></font>";
	let levelsList = "";
	levelsList += "<table><tr><td>";
	levelsList += "<span class = 'list'  onclick = 'startThisGame(1)'>- Две стены боли</span><br>";
	levelsList += "<span class = 'list'  onclick = 'startThisGame(2)'>- Ущелье страха</span><br>";
	levelsList += "<span class = 'list'  onclick = 'startThisGame(3)'>- Последнее убежище</span><br>";
	levelsList += "<span class = 'list'  onclick = 'startThisGame(4)'>- Лабиринт смерти</span><br>";
	levelsList += "<span class = 'list'  onclick = 'startThisGame(5)'>- Бойня на поле</span><br>";
	levelsList += "</td></tr></table> <br><br>";
	document.getElementById('message').innerHTML += levelsList;	
}

function myQueryAvt(script)
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
				document.getElementById('message').innerHTML = "";
				
				if(document.getElementById('edit1') != null)
				{				
					localStorage.setItem( 'myLog', document.getElementById('edit1').value );
					localStorage.setItem( 'myPas', document.getElementById('edit2').value );
				
					document.getElementById('edit1').value = "";
					document.getElementById('edit2').value = "";
				}
				
				login = localStorage.getItem("myLog");
				password = localStorage.getItem("myPas");
				
				document.getElementById('box1').innerHTML = "";
				document.getElementById('myHeader').innerHTML = "Мой профиль";
				
				document.getElementById('box1').innerHTML += "<div align = 'center'><h3><font color = '#00FF00'>Игрок: " + login + "</font></h3></div><br>";
				           
				document.getElementById('box1').innerHTML += "<input type = 'button' value = 'Начать игру' class = 'btn' onclick = 'printLevels()'>";
				document.getElementById('box1').innerHTML += "<br><br>";
				document.getElementById('box1').innerHTML += "<input type = 'button' value = 'Описание игры' class = 'btn' onclick = 'game_rules()'>";
				document.getElementById('box1').innerHTML += "<br><br>";
				document.getElementById('box1').innerHTML += "<input type = 'button' value = 'Мои достижения' class = 'btn' onclick = 'my_achiv()'>";
				document.getElementById('box1').innerHTML += "<br><br>";
				document.getElementById('box1').innerHTML += "<input type = 'button' value = 'Выйти из профиля' class = 'btn' onclick = 'function_exit()'>";
			}
			
			if(ansRequest == 'NO') document.getElementById('message').innerHTML = "Неверный логин или пароль.<br>";
		}
	}
}


function avt()
{
	document.getElementById('message').innerHTML = "";

	let log = document.getElementById('edit1').value + "";
	let pas = document.getElementById('edit2').value + "";
	
	let mess;
	
	mess = normalString(log);
	if(mess == 'EMPTY') document.getElementById('message').innerHTML += "Поле ввода логина пусто.<br>";
	if(mess == 'BAD') document.getElementById('message').innerHTML += "Поле ввода логина содержит запретные символы.<br>";
	
	mess = normalString(pas);
	if(mess == 'EMPTY') document.getElementById('message').innerHTML += "Поле ввода пароля пусто.<br>";
	if(mess == 'BAD') document.getElementById('message').innerHTML += "Поле ввода пароля содержит запретные символы.<br>";
	
	if( document.getElementById('message').innerHTML != "" ) return;
	
	const s = "myPHP/scr2.php?login=" + log + "&password=" + pas;
	myQueryAvt(s);
}

