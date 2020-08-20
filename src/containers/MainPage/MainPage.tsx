import React, { Component, ChangeEvent, SyntheticEvent } from 'react';
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
				name: 'oldPassword'
			},
			newPassword: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'New password'
				},
				value: '',
				name: 'newPassword'
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

	onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		let typedInput = event.target.value;
		console.log(event.target.name);
		switch (event.target.placeholder) {
			case ("Username"):
				this.setState({
					...this.state,
					profileEditForm: {
						...this.state.profileEditForm,
						username: {
							...this.state.profileEditForm.username,
							value: typedInput
						}
					}
				})
			break;

			case ("Fullname"):
				this.setState({
					...this.state,
					profileEditForm: {
						...this.state.profileEditForm,
						fullname: {
							...this.state.profileEditForm.fullname,
							value: typedInput
						}
					}
				})
			break;

			case ("Email address"):
				this.setState({
					...this.state,
					profileEditForm: {
						...this.state.profileEditForm,
						email: {
							...this.state.profileEditForm.email,
							value: typedInput
						}
					}
				})
			break;

			case ("Old password"):
				this.setState({
					...this.state,
					profileEditForm: {
						...this.state.profileEditForm,
						oldPassword: {
							...this.state.profileEditForm.oldPassword,
							value: typedInput
						}
					}
				})
			break;

			case ("New password"):
				this.setState({
					...this.state,
					profileEditForm: {
						...this.state.profileEditForm,
						newPassword: {
							...this.state.profileEditForm.newPassword,
							value: typedInput
						}
					}
				})
			break;

			default:
				break;
		}
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

	friendSelectHandler = (event: SyntheticEvent<HTMLLIElement>) => {
		event.preventDefault();
		let userId = localStorage.getItem('userId');
		let friendId = event.currentTarget.id;

		axios.post('/createConversation', {participants: [
			{ID: userId},
			{ID: friendId}
		]})
		.then(res => {
			this.props.history.push(`${this.props.match.path}/chat/${friendId}`)
		})
		.catch(err => {

		});
	}

	navClickHandler = (event: SyntheticEvent<HTMLLIElement>) => {
        event.preventDefault();
        let id = event.currentTarget.id;
        switch (id) {
			case 'Chat':
				this.props.history.replace('/home');
				this.setState({...this.state,
				sdShow: false,
				bdShow: false});
				break;
		
			case 'Profile':
				this.props.history.replace('/home/profile');
				this.setState({...this.state,
					sdShow: false,
					bdShow: false});
				break;
			default:
				break;
		}
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

				<SideDrawer sdShow={this.state.sdShow} navClick={this.navClickHandler} />
				<Backdrop clicked={this.toggleBackDrop} bdShow={this.state.bdShow}/>
				<NotifSD notifShow={this.state.notifShow}/>

				<Switch>

					<Route path={`${this.props.match.path}/profile`}>
						<ProfileLayout profileEditForm={this.state.profileEditForm} inputChange={this.onInputChangeHandler}/>
					</Route>
					
					<Route path={this.props.match.path}>
						<ChatsLayout 
						csShow={this.state.csShow} 
						toggleSearchContact={this.toggleSearchContact}
						searchInputHandler={this.searchInputHandler}
						searchedContacts={this.state.searchedContacts}
						addContact={this.addContactHandler}
						friends={this.state.friends}
						friendSelect={this.friendSelectHandler}/>
					</Route>

				</Switch>

            </div>
        )
    }
}

export default withRouter(MainPage);