import React, { Component } from 'react';
import classes from './App.module.css';
import SignInPage from '../../components/SignInPage/SignInPage';
import SignUpPage from '../../components/SignUpPage/SignUpPage';
import SignedUpPage from '../../components/SignedUpPage/SignedUpPage';
import MainPage from '../MainPage/MainPage';
import ChatPage from '../ChatPage/ChatPage';
import { Switch, Route } from 'react-router-dom';
import DesktopMain from '../DesktopMain/DesktopMain';
import Media from 'react-media';
import Aux from '../../hoc/Aux';

class App extends Component {

	state = {
		signInForm: {
			emailUsername: {
				elementType: 'input',
				elementConfig : {
					type: 'text',
					placeholder: 'Email address / Username'
				},
				value: '',
				name: 'username'
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				name: 'password'
			}
		},
		signUpForm: {
			email: {
				elementType: 'input',
				elementConfig : {
					type: 'email',
					placeholder: 'Email address'
				},
				value: '',
				name: 'email'			
			},
			fullname: {
				elementType: 'input',
				elementConfig : {
					type: 'text',
					placeholder: 'Fullname'
				},
				value: '',
				name: 'fullname'
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password'
				},
				value: '',
				name: 'password'
			}
		}
	}

	render(){

		return (
			<div className={classes.App}>

					<Media query="(min-width: 500px)">
						{matches => matches ? (

							<Switch>
								<Route path="/home">
									<DesktopMain/>
								</Route>

								<Route path="/signedup" exact>
									<SignedUpPage/>
								</Route>

								<Route path="/signup" exact>
									<SignUpPage signUpForm={this.state.signUpForm}/>
								</Route>

								<Route path="/">
									<SignInPage signInForm={this.state.signInForm}/>
								</Route>
							</Switch>

						) : (

							<Switch>

								<Route path="/home/chat/:id">
									<ChatPage />
								</Route>

								<Route path="/home">
									<MainPage />
								</Route>

								<Route path="/signedup" exact>
									<SignedUpPage/>
								</Route>

								<Route path="/signup" exact>
									<SignUpPage signUpForm={this.state.signUpForm}/>
								</Route>

								<Route path="/">
									<SignInPage signInForm={this.state.signInForm}/>
								</Route>
							</Switch>
							
						)}
						
					</Media>


			</div>
		  );
		  
	}
}

export default App;
