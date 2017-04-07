function getKvadradOfDlin(x1,y1,x2,y2)
{
	const answer = (x1-x2) * (x1-x2) + (y1-y2) * (y1-y2);
	return answer;
}

function rewrite()
{
	window.location = "";
}


function myQuerySaveResult(script)
{
	let r = new XMLHttpRequest();
	r.open("POST",script);
	r.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
	r.send(null);
	r.onreadystatechange = function()
	{
		if(r.readyState === 4 && r.status === 200) console.log("  Result was saved  ");
	}
}

function isHeroDead()
{
	if(vrag.length == 0)
	{
		clearInterval(t1);
		clearInterval(t2);
		document.getElementById('titlePic').style = "display:block";
		let can = document.getElementById('can');
		can.style = "display:none";
		let mes = document.getElementById('message');
		mes.innerHTML = "<h1>Вы победили.</h1>";
		mes.innerHTML += "<h2>Человечество спасено от гибели.</h2>";
		mes.innerHTML += "<br><input type = 'button' value = 'Главное меню' class = 'btn' onclick = 'rewrite()'>";
		
		let log = localStorage.getItem("myLog");
		let pas = localStorage.getItem("myPas");
		
		myQuerySaveResult("myPHP/scr3.php?login=" + log + "&password=" + pas + "&number=" + kkkk);
	}
	else
	{
		for(let i = 0; i < vragCount; i++)
		{
			let x1 = hero.x + 25;
			let y1 = hero.y + 25;
			
			let x2 = vrag[i].x + 25;
			let y2 = vrag[i].y + 25;
			
			if( getKvadradOfDlin(x1,y1,x2,y2) <= 1600)
			{
				clearInterval(t1);
				clearInterval(t2);
				document.getElementById('titlePic').style = "display:block";
				let can = document.getElementById('can');
				can.style = "display:none";
				let mes = document.getElementById('message');
				mes.innerHTML = "<h1>Вы проиграли.</h1>";
				mes.innerHTML += "<h2>Теперь человечество в полной ... </h2>";
				mes.innerHTML += "<br><input type = 'button' value = 'Главное меню' class = 'btn' onclick = 'rewrite()'>";
			}
		}
	}
}