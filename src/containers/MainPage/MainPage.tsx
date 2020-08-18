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
	_isMounted = false;

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
		searchedContacts: [],
		friends: []
	}

	componentDidMount() {

		let userId = localStorage.getItem('userId');

		axios.post('/fetchFriends', {myProfileID: userId})
		.then(res => {
			let friends = res.data.Details.friendsProfile;
			this.setState({...this.state,
			friends: friends})
		})
		.catch(err => {
			console.log(err);
		})
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
		this._isMounted = true;
		event.preventDefault();
		let searchInput = event.target.value;


		let word = searchInput.toLowerCase().trim();

		if (word.trim()) {
			axios.post('/findUser', {word: word})
			.then(res => {
				console.log(res);
				if (this._isMounted && res.data.Details) {
					let fetchedProfiles: [] = res.data.Details.purifiedProfiles;
					let userId = localStorage.getItem('userId');
					
					let updatedProfiles = fetchedProfiles.filter((profile: {_id: string}) => profile._id !== userId);

					this.setState({
						...this.state,
						searchedContacts: updatedProfiles})
				}
				else if (this._isMounted && !res.data.Details) {
					this.setState({
						...this.state,
						searchedContacts: []
					})
				}
			})
			.catch(err => {
				console.log(err)
			})
		}

		else {
			this.setState({
				...this.state,
				searchedContacts: []
			})
		}

	}

	addContactHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		let contactId = event.target.id;
		let userId = localStorage.getItem('userId');
		event.target.disabled = true;
		event.target.style.opacity = "0.4";
		axios.post('addFriend', {myProfileID: userId, hisProfileID: contactId})
		.then(res => {
			console.log(res);
		})
		.catch(err => {
			console.log(err);
		})

	}

	componentWillUnmount() {
		this._isMounted = false;
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
						searchedContacts={this.state.searchedContacts}
						addContact={this.addContactHandler}
						friends={this.state.friends}/>
					</Route>

				</Switch>

            </div>
        )
    }
}

export default withRouter(MainPage);