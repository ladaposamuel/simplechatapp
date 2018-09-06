$(function(){
   	//make connection
	let socket = io.connect('http://localhost:3000')
	let message = $("#message")
	let username = $("#username")
	let send_message = $("#send_message")
	let send_username = $("#send_username")
	let chat = $("#chat")
	let app = $("#app")
	send_message.click(function(){
		socket.emit('new_message', {message : message.val()})
	})
	socket.on("new_message", (data) => {
		app.html('');
		message.val('');
		chat.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
	})
	send_username.click(function(){
		socket.emit('change_username', {username : username.val()})
	})
});


