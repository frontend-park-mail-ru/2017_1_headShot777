// controlLoginAndPassword.js

function getObjectOfControlLoginAndPassword()
{
	let obj = new Object();
	
	obj.loginString = "";
	obj.passwordString = "";
	
	obj.isNormalChar = function(c)
	{
		let s = 'abcdefghijklmnopqrstuvwxyz0123456789';
		if(s.indexOf(c) != -1) return true;
		return false;
	}

	obj.isNormalString = function(s)
	{
		let n = s.length;
		for(let i = 0; i < n; ++i)
		{
			let c = s.charAt(i);
			if(this.isNormalChar(c) == false) return false;
		}
		return true;
	}
	
	obj.initValues = function(s1,s2)
	{
		this.loginString = s1;
		this.passwordString = s2;
	}
	
	obj.getResultOfControl = function()
	{
		if(this.loginString.length == 0 || this.passwordString.length == 0) return "Поле ввода пусто.";
		if(this.isNormalString(this.loginString) == false || this.isNormalString(this.passwordString) == false) return "Некорректный ввод.";
		return "OK";
	}
	
	return obj;
}

