function pullsMove()
{
	for(let i = 0; i < pullsCount; i++) 
	{
		if(pulls[i].vector == "LEFT") pulls[i].x -= pulls[i].speed;
		if(pulls[i].vector == "RIGHT") pulls[i].x += pulls[i].speed;
		if(pulls[i].vector == "UP") pulls[i].y -= pulls[i].speed;
		if(pulls[i].vector == "DOWN") pulls[i].y += pulls[i].speed;
	}
}


function vragMove(number)
{
	if(vrag[number].x < hero.x)
	{
		if(canHit(vrag[number].x + vrag[number].speed + 50, vrag[number].y + 25) == false)
		{
			if( canStolknuts(vrag[number].x + vrag[number].speed + 50, vrag[number].y + 25, number) == false) 
				vrag[number].x += vrag[number].speed;
		}
	}
	
	if(vrag[number].x > hero.x)
	{
		if(canHit(vrag[number].x - vrag[number].speed, vrag[number].y + 25) == false)
		{
			if( canStolknuts(vrag[number].x - vrag[number].speed, vrag[number].y + 25, number) == false) 
				vrag[number].x -= vrag[number].speed;
		}
	}
	
	if(vrag[number].y > hero.y)
	{
		if(canHit(vrag[number].x + 25, vrag[number].y - vrag[number].speed) == false)
		{
			if( canStolknuts(vrag[number].x + 25, vrag[number].y - vrag[number].speed, number) == false) 
				vrag[number].y -= vrag[number].speed;
		}
	}
	
	if(vrag[number].y < hero.y)
	{
		if(canHit(vrag[number].x + 25, vrag[number].y + vrag[number].speed + 50) == false)
		{
			if( canStolknuts(vrag[number].x + 25, vrag[number].y + vrag[number].speed + 50, number) == false) 
				vrag[number].y += vrag[number].speed;
		}
	}
}



function heroMove()
{
	if(vector == "LEFT") 
	{
		if( canHit(hero.x - hero.speed, hero.y + 25) == false )
		{
			hero.x -= hero.speed;
			worldX += hero.speed;
		}
	}
	else
	if(vector == "RIGHT") 
	{
		if( canHit(hero.x + hero.speed + 50, hero.y + 25) == false )
		{
			hero.x += hero.speed;
			worldX -= hero.speed;
		}
	}
	else
	if(vector == "UP") 
	{
		if( canHit(hero.x + 25, hero.y - hero.speed) == false )
		{
			hero.y -= hero.speed;
			worldY += hero.speed;
		}
	}
	else
	if(vector == "DOWN") 
	{
		if( canHit(hero.x + 25, hero.y + hero.speed + 50) == false )
		{
			hero.y += hero.speed;
			worldY -= hero.speed;
		}
	}
}


function allVragsMove()
{
	for(let i = 0; i < vragCount; i++) vragMove(i);
}

