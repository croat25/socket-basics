var PORT = process.env.port||3000; //initialze port and local host
var express = require('express');// get express
var app=express(); // initializr app to express variable
var http=require('http').Server(app);//get the http to listen to the server.app


app.use(express.static(__dirname+'/public'));

http.listen(PORT, function(){
	console.log('serverstarted');
});