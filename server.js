
var PORT = process.env.PORT || 3000; //initialze port and local host
var express = require('express');// get express
var app=express(); // initializr app to express variable
var http=require('http').Server(app);//get the http to listen to the server.app
var io=require('socket.io')(http);

app.use(express.static(__dirname+'/public'));


io.on('connection',function(socket){
	console.log('User connected via socket.io!');
	socket.on('message',function(message){
		console.log('message recived: '+ message.text);
		socket.broadcast.emit('message',message);
	});	


	socket.emit('message',{
		text:'welcome!'

	});
});

http.listen(PORT, function(){
	console.log('serverstarted');
});