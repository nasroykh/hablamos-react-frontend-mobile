import classes from './App.module.scss';
import React, {useEffect, useState} from 'react';
// import axios from './axios';
import socketIOClient from "socket.io-client";
import {Switch, Route} from 'react-router-dom'
import LoadingPage from './containers/LoadingPage/LoadingPage';
import LandingPage from './containers/LandingPage/LandingPage';
import SignUpPage from './containers/SignUpPage/SignUpPage';
import SignInPage from './containers/SignInPage/SignInPage';
import MainPage from './containers/MainPage/MainPage';
import ChatPage from './containers/ChatPage/ChatPage';
import { isDesktop, isMobile } from "react-device-detect";
// const ENDPOINT = "http://localhost:4444"; 
// const socket = socketIOClient(ENDPOINT);

const App = () => {

	const [fetchedMessages, setFetchedMessages] = useState([]);
	const [username, setUsername] = useState('');
	const [conv, setConv] = useState('');
	const [friend, setFriend] = useState('');

	useEffect(() => {
		if (isMobile && window.location.hostname==='hablamos.me') {
			window.location.href = 'https://m.hablamos.me';
		} 

	}, [])

	// useEffect(() => {
	// 	socket.on("connection", () => {
	// 		console.log('Connected to socket!');
	// 	});
	// 	socket.on('message', (mes) => {
	// 		console.log(mes)
	// 	});
	// 	socket.on('conv', (data) => {
	// 		if (data._id) {
	// 			setConv(data._id)
	// 			setFetchedMessages(data.messages);
	// 		} else {
	// 			setConv('')
	// 			setFetchedMessages([]);
	// 		}
	// 	});
	// 	socket.on('receiveMessage', (data) => {
	// 		let newMessages = [...fetchedMessages];
	// 		newMessages.push({
	// 			sender: data.username,
	// 			message: data.message,
	// 			sentAt: data.date,
	// 			_id: data._id
	// 		});
	// 		setFetchedMessages(newMessages);
	// 	});

	// }, [fetchedMessages])
	
 	return (
		<div className={classes.App}>
			<Switch>
				<Route path='/chat'>
					<ChatPage/>
				</Route>
				<Route path='/main'>
					<MainPage/>
				</Route>
				<Route path='/signin'>
					<SignInPage/>
				</Route>
				<Route path='/signup'>
					<SignUpPage/>
				</Route>
				<Route path='/'>
					{/* <LoadingPage/> */}
					<LandingPage/>
				</Route>
			</Switch>
		</div>
  	);
}

export default App;
