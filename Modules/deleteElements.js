
function incTimeOfAllPulls()
{
	for(let i = 0; i < pullsCount; i++) pulls[i].t += 1;
}


function deleteSomeVrags()
{
	for(let i = 0; i < vragCount; i++)
	{
		if(vrag[i].live <= 0)
		{
			vrag.splice(i,1);
			vragCount--;
			i = 0;
		}
	}
}


function deleteSomePulls()
{
	for(let i = 0; i < pullsCount; i++) 
	{
		if( pulls[i].t >= 4 || canHit(pulls[i].x,pulls[i].y) == true )
		{
			pulls.splice(i,1);
			pullsCount--;
			i = 0;
		}
	}
}

