import React, { Component, ChangeEvent } from 'react';
import classes from './MainPage.module.css';
import ChatsLayout from '../../components/ChatsLayout/ChatsLayout';
import ProfileLayout from '../../components/ProfileLayout/ProfileLayout';
import Logo from '../../elements/Logo/Logo';
import bell from '../../assets/icons/NotifBell.svg';
import DesktopMain from '../DesktopMain/DesktopMain';
import {Route, Switch, RouteComponentProps, withRouter, Redirect} from 'react-router-dom';
import ChatPage from '../ChatPage/ChatPage';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../elements/Backdrop/Backdrop';
import NotifSD from '../../components/NotifSD/NotifSD';
import axios from '../../axios-hb';

interface AppProps extends RouteComponentProps {
	isAuth: boolean;
};

class MainPage extends Component<AppProps> {

    state = {
        profileEditForm : {
			fullname: {
				elementType: 'input',
				elementConfig : {
					type: 'text',
					placeholder: 'Fullname'
				},
				value: '',
				name: 'fullname'
			},
			username: {
				elementType: 'input',
				elementConfig : {
					type: 'text',
					placeholder: 'Username'
				},
				value: '',
				name: 'username'
			},
			email: {
				elementType: 'input',
				elementConfig : {
					type: 'email',
					placeholder: 'Email address'
				},
				value: '',
				name: 'email'			
			},
			oldPassword: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Old password'
				},
				value: '',
				name: 'password'
			},
			newPassword: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'New password'
				},
				value: '',
				name: 'password'
			}
		},
		sdShow: false,
		bdShow : false,
		notifShow: false,
		csShow: false,
		searchInput: '',
		searchedContacts: []
	}
	
	toggleSideDrawer = () => {
		let actualSDState = this.state.sdShow;
		this.setState({
			...this.state,
			sdShow : !actualSDState,
			bdShow: true,
			notifShow: false,
			csShow: false
		})
	}

	toggleBackDrop = () => {
		let actualBDState = this.state.bdShow;
		this.setState({
			...this.state,
			bdShow : !actualBDState,
			sdShow: false,
			notifShow: false,
			csShow: false

		})
	}

	toggleNotifSD = () => {
		let actualNotifSDState = this.state.notifShow;
		this.setState({
			...this.state,
			notifShow : !actualNotifSDState,
			sdShow: false,
			bdShow: true,
			csShow: false
		})
	}

	toggleSearchContact = () => {
		let actualCsState = this.state.csShow;
		this.setState({
			...this.state,
			csShow: !actualCsState,
			bdShow: true,
			sdShow: false,
			notifShow: false
		})
	}

	searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		let searchInput = event.target.value;


		console.log(searchInput);

		let word = searchInput.toLowerCase();

		axios.post('/findUser', {word: word})
		.then(res => {
			console.log(res);
			this.setState({
				...this.state,
				searchedContacts: res.data.Details.purifiedProfiles})
		})
		.catch(err => {
			console.log(err)
		})

	}

    render() {
		let authRedirect = null;

        if (!this.props.isAuth) {
            authRedirect = <Redirect to='/'/>
		}
		
        return (
            <div className={classes.MainPage}>
				{authRedirect}
                <div className={classes.Header}>
                    <input type="image" src={bell} alt="Notifications" width="25px" onClick={this.toggleNotifSD}/>
                    <Logo size="small"/>
                    <span className={classes.ProfilePicture} onClick={this.toggleSideDrawer}></span>
                </div>

				<SideDrawer sdShow={this.state.sdShow} />
				<Backdrop clicked={this.toggleBackDrop} bdShow={this.state.bdShow}/>
				<NotifSD notifShow={this.state.notifShow}/>

				<Switch>

					<Route path={`${this.props.match.path}/profile`}>
						<ProfileLayout profileEditForm={this.state.profileEditForm} />
					</Route>
					
					<Route path={this.props.match.path}>
						<ChatsLayout 
						csShow={this.state.csShow} 
						toggleSearchContact={this.toggleSearchContact}
						searchInputHandler={this.searchInputHandler}
						searchedContacts={this.state.searchedContacts}/>
					</Route>

				</Switch>

            </div>
        )
    }
}

export default withRouter(MainPage);