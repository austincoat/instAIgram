var testicular;

function onClickRegister() {
	var email = document.getElementById("email").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var form = new FormData();
	form.append("email", email);
	form.append("username", username);
	form.append("password", password);

	var settings = {
	"async": true,
	"crossDomain": true,
	"url": "http://instai.cloudapp.net:8080/user/create",
	"method": "POST",
	"headers": {
		"authorization": "Basic YWNvYXRlczpJTmVlZEFKb2I=",
		"cache-control": "no-cache",
		"postman-token": "12e4eb35-3dc6-5e69-a28e-f3543235bd32"
	},
	"processData": false,
	"contentType": false,
	"mimeType": "multipart/form-data",
	"data": form
	}

	$.ajax(settings).done(function (response) {
		var body = $.parseJSON(response);
		if(!body.success) {
			alert(body.message);
		} else {
			location.href="./login.html";
		}
	});
}