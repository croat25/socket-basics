var socket = io();

socket.on('connect',function(){
	console.log("connected to socket.io server!");
});
socket.on('message',function(message){
	console.log('New message:');
	var momenttimestamp=moment.utc(message.timestamp);
	console.log(message.text);
	// class u start with period
	jQuery('.messages').append('<p><strong>'+momenttimestamp.local().format("h:mm a")+'</strong>'+message.text+'</p>')
});


//this is the index side form

//# is used for ids
// 'title ' is for straight up tags
var $form = jQuery('#message-form');


$form.on('submit',function(event){
	event.preventDefault();//used to server

	var $message=$form.find('input[name=message]');
	socket.emit('message',{
		text: $message.val()
	});
	//
	$message.val("");
});