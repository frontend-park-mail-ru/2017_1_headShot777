function pushPull(xx,yy)
{
	let p = new Object();
	p.x = xx;
	p.y = yy;
	p.speed = 12;
	p.t = 0;
	p.vector = vectorBefore;
	pulls[pullsCount] = p;
	pullsCount += 1;
}

function putWall(xx,yy)
{
	let w = new Object();
	w.x = xx - 200;
	w.y = yy - 200;
	walls[wallsCount] = w;
	wallsCount++;
}

function addVrag(xx,yy)
{
	let v = new Object();
	v.x = xx - 200 + 25;
	v.y = yy - 200 + 25;
	v.speed = 3;
	v.live = 1;
	vrag[vragCount] = v;
	vragCount++;
}

