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
import {checkAuth} from './store/auth/auth-actions';
import {userActions} from './store/user/user-slice';
import DialogBox from './components/DialogBox/DialogBox';
import LoadingSpinner from './elements/LoadingSpinner/LoadingSpinner';

const ENDPOINT = "https://fierce-inlet-31066.herokuapp.com"; 
// const ENDPOINT = "ws://localhost:4444"; 
export const socket = socketIOClient(ENDPOINT);

const App = () => {

	let isAuth = useSelector(state => state.auth.isAuth);
	let isLoading = useSelector(state => state.user.isLoading);
	
	const dispatch = useDispatch();

	const [sdShow, setSdShow] = useState(false);
	const [bdShow, setBdShow] = useState(false);

	useEffect(() => {
        socket.on('message:receive', (payload) => {
			dispatch(userActions.receiveMessage({
				message: payload.message,
				sender: payload.sender,
				time: payload.time
			}));
        });
    }, [dispatch]);

	useEffect(() => {
		if (isMobile && window.location.hostname==='hablamos.me') {
			window.location.href = 'https://m.hablamos.me';
		} 

		dispatch(checkAuth(localStorage.getItem('token')));

		socket.on("connection", () => {
			console.log('Connected to socket!');
		});
		
	}, [dispatch])
	

    const sdToggleHandler = () => {
        setBdShow(!bdShow);
        setSdShow(!sdShow);
    }

 	return (
		 <div className={classes.App}>
			<DialogBox/>
			{isLoading ? <LoadingSpinner/> : null}
			<Switch>

				<Route path='/chat'>
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
