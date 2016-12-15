
function postPhoto(file, token)
{
var form = new FormData();
var file;
var token;
form.append("file", file);
form.append("", var form = new FormData();
form.append("file", file);
form.append("", token);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://instai.cloudapp.net:8080/post",
  "method": "POST",
  "headers": {
    "token": token,
    "cache-control": "no-cache",
    "postman-token": "180342e0-f62f-94b6-8c95-c3ada446d0a7"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
}););

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://instai.cloudapp.net:8080/post",
  "method": "POST",
  "headers": {
    "token": "A5jdpgvqdBo60+LinV+gXpxtSDvluvcJZVZNcGHcZXI+tDhivaFbpk9AQq1/D5/DADvplLx8/E7iKa0WCm9wyyILzLfkD5R0QlSqrNip6e2Ywz5HpnWOiCUX0/ChzYKJAYJ3BoyDj1bEwBLSKSnLQ2GYdGPHscGfQn/E8c2VdiO42w+cdO/yhWuN/gjtcWtVZGIJ1qOSQPB4RwcUnxxkxSuMSh2McLq3xkBTWa1JSKXnhUEr1nA2oynmR80UNP3yo2vxTe4KkUoo1CTGMKtpO4fZ2e+Y32WuYKVU044gr3vwzcu8VyBc807o2pO9ZJaIAGFoDD4gNA8bfKBCxi/YCgzFiBERDZxcJE4V1KOD/65KP9Yj/f2kpAs3LxG+k7FUdyj7Z2FlnzqIu2Yiq37YTTM6y0ZcjrKwFwpKSwc7i6LU9sn1f8/Y12RHvrCFdkUHVsO4J/IIza+Z2b40YRGU3sQY3JMyRAyFgjvFl4QCU+s9uaTTGNi801oFL/7iLnshHsSlrN8hE3ehyBc//AtMaInUL8AsHQAJvBPIr4gkO16bj+ltWBds8/Lzr1WdNHFYWzB9PcGm1TeoB0x3+y+XRvRlgVZvdTjLRT10b12Ens3OI9bTmx3+piHzuxsKDlaXPBJZSlI5Y2SXQrwBtbg5HUz9U5I5xIRG6G4QkyxAq7A=",
    "cache-control": "no-cache",
    "postman-token": "180342e0-f62f-94b6-8c95-c3ada446d0a7"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}