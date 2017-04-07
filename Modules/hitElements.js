function isPulaHitSomebody()
{
	for(let j = 0; j < pullsCount; j++)
	{
		const number = j;
		let tochkaX = pulls[number].x;
		let tochkaY = pulls[number].y;
		
		for(let i = 0; i < vragCount; i++)
		{
			let x = vrag[i].x;
			let y = vrag[i].y;
			const w = 50;
			
			if(x <= tochkaX && tochkaX <= x + w)
				if(y <= tochkaY && tochkaY <= y + w)
				{
					pulls[number].t = 25;
					vrag[i].live -= 1;
				}
		}
	}
}


function canHit(tochkaX,tochkaY)
{
	for(let i = 0; i < wallsCount; i++) 
	{
		const x = walls[i].x;
		const y = walls[i].y;
		const w = 100;
		
		if(x <= tochkaX && tochkaX <= x + w)
			if(y <= tochkaY && tochkaY <= y + w)
				return true;
	}
	
	return false;
}


function canStolknuts(tochkaX,tochkaY,number)
{	
	for(let i = 0; i < vragCount; i++) 
	{
		if(i != number)
		{
			const x = vrag[i].x;
			const y = vrag[i].y;
			const w = 50;
			
			if(x <= tochkaX && tochkaX <= x + w)
				if(y <= tochkaY && tochkaY <= y + w)
					return true;
		}
	}
	
	return false;
}