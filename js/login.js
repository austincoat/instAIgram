var cookie;

function readCookie(name) 
{
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) 
	{
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function createCookie(name,val,days) 
{
	if (days) 
	{
		console.log(name + " | " + val);
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else 
	{
		var expires = "";
	}
	document.cookie = name+"="+val+expires+"; path=/";
}


function onClickSignIn() 
{
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var form = new FormData();
	form.append("email", email);
	form.append("password", password);


	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://instai.cloudapp.net:8080/login",
	  "method": "POST",
	  "headers": {
		"cache-control": "no-cache",
		"postman-token": "5c6e6f52-1762-2093-d6c6-4008e8e86adc"
	  },
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
		var cookie_data = $.parseJSON(response);
		createCookie("token101", cookie_data.token, 1);
	});
}