function normalChar(c)
{
	c = c.toUpperCase();
	const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789';
	let n = s.indexOf(c);	
	if(n == -1)
		return false;
	else
		return true;
}

function normalString(s)
{
	const n = s.length;
	if(n == 0) return "EMPTY";
	
	for(let i = 0; i < n; i++)
	{
		let c = s.charAt(i);
		if(normalChar(c) == false) return "BAD";
	}
	
	return "GOOD";
}