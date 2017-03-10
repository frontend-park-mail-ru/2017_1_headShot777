// renderingInformation.js

function getObjectOfRendering()
{
	let obj = new Object();
	
	obj.placeString = "";
	
	obj.initPlace = function(s)
	{
		this.placeString = s;
	}
	
	obj.clearInformation = function()
	{
		document.getElementById(this.placeString).innerHTML = "";
	}
	
	obj.setInformation = function(s)
	{
		document.getElementById(this.placeString).innerHTML = s;
	}
	
	obj.appendInformation = function(s)
	{
		document.getElementById(this.placeString).innerHTML += s;
	}
	
	return obj;
}