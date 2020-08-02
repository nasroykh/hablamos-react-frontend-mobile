import React, { Component } from 'react';
import classes from './App.module.css';
import SignInPage from '../../components/SignInPage/SignInPage';
import SignUpPage from '../../components/SignUpPage/SignUpPage';
import SignedUpPage from '../../components/SignedUpPage/SignedUpPage';

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
				{/* <SignInPage signInForm={this.state.signInForm}/> */}
				<SignUpPage signUpForm={this.state.signUpForm}/>
				{/* <SignedUpPage/> */}
			</div>
		  );
		  
	}
}

export default App;
