function drawAllPulls()
{
	holst.fillStyle = '#00FF00';
	for(let i = 0; i < pullsCount; i++)
		holst.fillRect(pulls[i].x + worldX - 5, pulls[i].y + worldY - 5, 10, 10);
}


function printAllWallsAndVrags()
{
	for(let i = 0; i < wallsCount; i++) 
		holst.drawImage(wall,walls[i].x + worldX, walls[i].y + worldY, 100, 100);
		
	for(let i = 0; i < vragCount; i++) 
		holst.drawImage(enemy,vrag[i].x + worldX, vrag[i].y + worldY, 50, 50);
}


function drawHero()
{
	if(vectorBefore == "LEFT") 
		holst.drawImage(m4,hero.x + worldX, hero.y + worldY, 50, 50);
	else
	if(vectorBefore == "RIGHT") 
		holst.drawImage(m2,hero.x + worldX, hero.y + worldY, 50, 50);
	else
	if(vectorBefore == "UP") 
		holst.drawImage(m1,hero.x + worldX, hero.y + worldY, 50, 50);
	else
	if(vectorBefore == "DOWN") 
		holst.drawImage(m3,hero.x + worldX, hero.y + worldY, 50, 50);
		
	if(vector != "STOP") vectorBefore = vector;
}


function printBackFon()
{
	for(let i = -20; i < 20; i++)
		for(let j = -20; j < 20; j++)
			holst.drawImage(backFon,j * 200 + worldX, i * 200 + worldY, 200, 200);
}


function clearAll()
{
	holst.clearRect(0,0,600,600);
	holst.fillStyle = '#CCCCCC';
	holst.fillRect(0,0,600, 600);
	printBackFon();
}