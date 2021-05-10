import classes from './App.module.scss';
import React, {useEffect, useState} from 'react';
// import axios from './axios';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4444"; 
const socket = socketIOClient(ENDPOINT);

const App = () => {

	const [fetchedMessages, setFetchedMessages] = useState([]);
	const [username, setUsername] = useState('');
	const [conv, setConv] = useState('');
	const [friend, setFriend] = useState('');

	useEffect(() => {
		socket.on("connection", () => {
			console.log('Connected to socket!');
		});
		socket.on('message', (mes) => {
			console.log(mes)
		});
		socket.on('conv', (data) => {
			if (data._id) {
				setConv(data._id)
				setFetchedMessages(data.messages);
			} else {
				setConv('')
				setFetchedMessages([]);
			}
		});
		socket.on('receiveMessage', (data) => {
			let newMessages = [...fetchedMessages];
			newMessages.push({
				sender: data.username,
				message: data.message,
				sentAt: data.date,
				_id: data._id
			});
			setFetchedMessages(newMessages);
		});

	}, [fetchedMessages])
	
	const friendChatHandler = (e) => {
		e.preventDefault();
		const username = e.target.elements.username.value;
		const friend = e.target.elements.friend.value;
		setUsername(username)
		setFriend(friend)

		socket.emit('openConv', {username, friend, conv: ''});
	}

	const convChatHandler = (e) => {
		e.preventDefault();
		const username = e.target.elements.username.value;
		const conv = e.target.elements.conv.value;	
		setUsername(username)
		setConv(conv)

		socket.emit('openConv', {username, conv, friend: ''});
	}

	const sendMessageHandler = (e) => {
		e.preventDefault();
		const message = e.target.elements.messageInput.value

		socket.emit('sendMessage', {username, message, conv, friend})

		e.target.elements.messageInput.value = '';
	}

	let messagesList;
	
	if (fetchedMessages) {
		messagesList = fetchedMessages.map(el => (
			<li key={el._id}>{el.sender} : {el.message}</li>
		))
	}

 	return (
		<div className={classes.App}>
			<h1>Hablamos chat app</h1>
			<form className={classes.ContactForm} onSubmit={friendChatHandler}>
				<input type="text" placeholder='Enter your username' name="username"/>
				<input type="text" placeholder='Enter your friends username' name="friend"/>
				<button type="submit">Confirm</button>
			</form>
			<form className={classes.ContactForm} onSubmit={convChatHandler}>
				<input type="text" placeholder='Enter your username' name="username"/>
				<input type="text" placeholder='Enter conversation id' name="conv"/>
				<button type="submit">Confirm</button>
			</form>
			<div>
				<ul className={classes.Messages}>
					{messagesList}
				</ul>
				<form onSubmit={sendMessageHandler}>
					<input type="text" name="messageInput"/>
					<button type="submit">Send</button>
				</form>
			</div>
		</div>
  	);
}

export default App;
