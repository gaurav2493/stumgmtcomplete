function authenticate()
{
	//window.location.assign("#page2");
	document.getElementById("loadImg_login").width="40";
	document.getElementById("loadImg_login").height="40";
	var user=document.getElementById("usernameLogin").value;
	var password=document.getElementById("passwordLogin").value;
	var script=document.createElement('script');
	script.src=authentication+user+'&password='+password+'&callback=verify';
	document.getElementsByTagName('head')[0].appendChild(script);
}


function verify(data)
{
	document.getElementById("loadImg_login").width="";
	document.getElementById("loadImg_login").height="";
	if(data=="sucess")//authenticated  || sucess
	{
		window.location.assign("#page2");
	}
	else
	{
		//alert(data);
		//alert("incorrect username or password");
		//jAlert('Incorrect username\n or \n password','OK');
		document.getElementById("incorrect_pass").innerHTML="<font color='red'>incorrect username or password</font>";
	}
}