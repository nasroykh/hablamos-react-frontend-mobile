import React, { Component, ChangeEvent } from 'react';
import classes from './App.module.css';
import SignInPage from '../../components/SignInPage/SignInPage';
import SignUpPage from '../../components/SignUpPage/SignUpPage';
import SignedUpPage from '../../components/SignedUpPage/SignedUpPage';
import MainPage from '../MainPage/MainPage';
import ChatPage from '../ChatPage/ChatPage';
import { Switch, Route, RouteComponentProps, withRouter, Redirect } from 'react-router-dom';
import DesktopMain from '../DesktopMain/DesktopMain';
import Media from 'react-media';
import { connect } from 'react-redux'; 
import * as actions from '../../store/actions/index'; 
import socketIOClient from 'socket.io-client'; 
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Spinner from '../../elements/Spinner/Spinner';
// const ENDPOINT = "http://127.0.0.1:4444"

interface AppProps extends RouteComponentProps {
	onSignIn: (email: string, password: string, socketId: string) => void;
	onSignUp: (email: string, fullname: string, password: string, socketId: string) => void;
	loading: boolean;
	redirectUrl: string;
	isAuth: boolean;
}

class App extends Component<AppProps> {

/* 	componentDidMount() {
		const socket = socketIOClient(ENDPOINT);
		let socketId= undefined;
		socket.on('connected', (socketId: string) => {
			this.setState({socketId: socketId})
		});
	} */

	state = {
		signInForm: {
			emailUsername: {
				elementType: 'input',
				elementConfig : {
					type: 'text',
					placeholder: 'Email address / Username',
					name: 'siusername'
				},
				value: '',
				name: 'username'
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password',
					name: 'sipassword'
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
					placeholder: 'Email address',
					name: 'suemail'	
				},
				value: '',
				name: 'email'			
			},
			fullname: {
				elementType: 'input',
				elementConfig : {
					type: 'text',
					placeholder: 'Fullname',
					name: 'sufullname'
				},
				value: '',
				name: 'fullname'
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Password',
					name: 'supassword'
				},
				value: '',
				name: 'password'
			}
		},
		socketId: '',
		isSignUp: false
	}

	onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		let typedInput = event.target.value;
		switch (event.target.name) {
			case ("siusername"):
				this.setState({
					...this.state,
					signInForm: {
						...this.state.signInForm,
						emailUsername: {
							...this.state.signInForm.emailUsername,
							value: typedInput
						}
					}
				})
			break;

			case ("sipassword"):
				this.setState({
					...this.state,
					signInForm: {
						...this.state.signInForm,
						password: {
							...this.state.signInForm.password,
							value: typedInput
						}
					}
				})
			break;

			case ("suemail"):
				this.setState({
					...this.state,
					signUpForm: {
						...this.state.signUpForm,
						email: {
							...this.state.signUpForm.email,
							value: typedInput
						}
					}
				})
			break;

			case ("sufullname"):
				this.setState({
					...this.state,
					signUpForm: {
						...this.state.signUpForm,
						fullname: {
							...this.state.signUpForm.fullname,
							value: typedInput
						}
					}
				})
			break;

			case ("supassword"):
				this.setState({
					...this.state,
					signUpForm: {
						...this.state.signUpForm,
						password: {
							...this.state.signUpForm.password,
							value: typedInput
						}
					}
				})
			break;

			default:
				break;
		}
	}

	onSignInHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		console.log(this.props);

		this.setState({...this.state,
		isSignUp:false})

		this.props.onSignIn(this.state.signInForm.emailUsername.value, this.state.signInForm.password.value, this.state.socketId);


	}

	onSignUpHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		this.setState({...this.state,
			isSignUp:true})

		this.props.onSignUp(this.state.signUpForm.email.value, this.state.signUpForm.fullname.value, this.state.signUpForm.password.value, this.state.socketId)

	}

	render(){

		let authRedirect = null;

		if (this.props.isAuth) {
			if (this.state.isSignUp) {
				authRedirect = <Redirect to='/signedup'/>
			}
			else if (!this.state.isSignUp) {
				authRedirect = <Redirect to='/home'/> 
			}
		} 
		

		return (
			<div className={classes.App}>
				{authRedirect}
					<Media query="(min-width: 500px)">
						{matches => matches ? (

							<Switch>
								<Route path="/home">
									{this.props.loading ? <Spinner/> : <DesktopMain isAuth={!this.props.isAuth} />}
									{/* isAuth changed for test */} 
								</Route>

								<Route path="/signedup" exact>
									{this.props.loading ? <Spinner/> : <SignedUpPage isAuth={this.props.isAuth}/>}
								</Route>

								<Route path="/signup" exact>
									<SignUpPage 
										signUpForm={this.state.signUpForm}
										inputChange={this.onInputChangeHandler}
										onSignUpHandler={this.onSignUpHandler}/>
								</Route>

								<Route path="/">
									<SignInPage 
									signInForm={this.state.signInForm}
									inputChange={this.onInputChangeHandler}
									onSignInHandler={this.onSignInHandler}/>
								</Route>
							</Switch> 
							
						) : (

							<Switch>

								<Route path="/home/chat/:id">
									<ChatPage />
								</Route>

								<Route path="/home">
									{this.props.loading ? <Spinner/> : <MainPage isAuth={!this.props.isAuth} />}
									{/* isAuth changed for test */} 
								</Route>

								<Route path="/signedup" exact>
									{this.props.loading ? <Spinner/> : <SignedUpPage isAuth={this.props.isAuth} />}
								</Route>

								<Route path="/signup" exact>
									<SignUpPage 
										signUpForm={this.state.signUpForm}
										inputChange={this.onInputChangeHandler}
										onSignUpHandler={this.onSignUpHandler}/>
								</Route>

								<Route path="/">
									<SignInPage 
										signInForm={this.state.signInForm}
										inputChange={this.onInputChangeHandler}
										onSignInHandler={this.onSignInHandler}/>
								</Route>
							</Switch>
							
						)}
						
					</Media>

	
			</div>
		  );
		  
	}
}

interface MapStateToPropsTypes {
	loading: boolean;
	isAuth: boolean;
	redirectUrl: string;
}

interface MapDispatchToPropsTypes {
	onSignIn: (email: string, password: string, socketId: string) => void;
	onSignUp: (email: string, fullname: string, password: string, socketId: string) => void;
}
	
const mapStateToProps = (state: any, ownProps: any) => {
	return {
		loading: state.loading,
		redirectUrl: state.redirectUrl,
		isAuth: state.isAuth
	}
}


const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		onSignIn: (email: string, password: string, socketId: string) => dispatch(actions.signIn(email, password, socketId)),
		onSignUp: (email: string, fullname: string, password: string, socketId: string) => dispatch(actions.signUp(email,fullname,password,socketId))
	}
};


export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(mapStateToProps, mapDispatchToProps)(withRouter(App));
