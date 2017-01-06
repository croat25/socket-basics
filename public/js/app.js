var socket = io();
var name=getQueryVariable('name') || 'anon';
var room=getQueryVariable('room');

console.log(name+"wants to join"+room);
socket.on('connect',function(){
	console.log("connected to socket.io server!");
});
socket.on('message',function(message){
	var $message=jQuery('.messages');
	console.log('New message:');
	var momenttimestamp=moment.utc(message.timestamp);
	console.log(message.text);
	// class u start with period
	$message.append('<p><strong>'+ message.name +''+ momenttimestamp.local().format("h:mm a")+'</strong></p>')
	$message.append('<p>'+message.text+'</p>');
});


//this is the index side form

//# is used for ids
// 'title ' is for straight up tags
var $form = jQuery('#message-form');


$form.on('submit',function(event){
	event.preventDefault();//used to server

	var $message=$form.find('input[name=message]');
	socket.emit('message',{
		name:name,
		text: $message.val()
	});
	//
	$message.val("");
});