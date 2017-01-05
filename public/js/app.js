var socket = io();

socket.on('connect',function(){
	console.log("connected to socket.io server!");
});
socket.on('message',function(message){
	console.log('New message:');
	console.log(message.text);
	// class u start with period
	jQuery('.messages').append('<p>'+message.text+'</p>')
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