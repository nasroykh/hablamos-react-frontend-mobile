import classes from './App.module.scss';
import React, {useEffect, useState} from 'react';
import socketIOClient from "socket.io-client";
import {Switch, Route, Redirect} from 'react-router-dom'
import { isMobile } from "react-device-detect";
import {useSelector, useDispatch} from 'react-redux';
// import LoadingPage from './containers/LoadingPage/LoadingPage';
import LandingPage from './containers/LandingPage/LandingPage';
import SignUpPage from './containers/SignUpPage/SignUpPage';
import SignInPage from './containers/SignInPage/SignInPage';
import MainPage from './containers/MainPage/MainPage';
import ChatPage from './containers/ChatPage/ChatPage';
import {checkAuth} from './store/auth-actions';

const ENDPOINT = "http://localhost:4444"; 
const socket = socketIOClient(ENDPOINT);

const App = () => {

	let isAuth = useSelector(state => state.auth.isAuth);
	const dispatch = useDispatch(); 

	useEffect(() => {
		if (isMobile && window.location.hostname==='hablamos.me') {
			window.location.href = 'https://m.hablamos.me';
		} 

		dispatch(checkAuth(localStorage.getItem('token')));

		socket.on("connection", () => {
			console.log('Connected to socket!');
		});
		
		// socket.emit('getId', '60afef864bbd17afacb08c07');

		// socket.on('message:receive', (message) => {
		// 	console.log(message)
		// })
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

	const [sdShow, setSdShow] = useState(false);
    const [bdShow, setBdShow] = useState(false);

    const sdToggleHandler = () => {
        setBdShow(!bdShow);
        setSdShow(!sdShow);
    }

 	return (
		<div className={classes.App}>
			<Switch>

				<Route path='/chat/:id'>
					{isAuth ? 
						<ChatPage
							sdShow={sdShow}
							bdShow={bdShow}
							sdToggleHandler={sdToggleHandler}/> : <Redirect to='/'/>}
				</Route>

				<Route path='/main'>
					{isAuth ? 
					<MainPage
						sdShow={sdShow}
						bdShow={bdShow}
						sdToggleHandler={sdToggleHandler}/> : <Redirect to='/'/>}
				</Route>

				<Route path='/signin'>
					{isAuth ? <Redirect to='/main/convs'/> : <SignInPage/>}
				</Route>

				<Route path='/signup'>
					{isAuth ? <Redirect to='/main/convs'/> : <SignUpPage/>}
				</Route>

				<Route path='/'>
					{/* <LoadingPage/> */}
					{isAuth ? <Redirect to='/main/convs'/> : <LandingPage/>}
				</Route>

			</Switch>
		</div>
  	);
}

export default App;
