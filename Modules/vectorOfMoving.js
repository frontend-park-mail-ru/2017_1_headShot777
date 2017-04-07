window.onkeydown = function(event)
{	
	const n = event.keyCode;
	vector = "STOP";
	if(n == 87) vector = "UP";
	if(n == 65) vector = "LEFT";
	if(n == 83) vector = "DOWN";
	if(n == 68) vector = "RIGHT";
}

window.onkeyup = function(event)
{
	
}