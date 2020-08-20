import React, {Component, ChangeEvent, SyntheticEvent} from 'react';
import classes from './DesktopMain.module.css';
import Logo from '../../elements/Logo/Logo';
import bell from '../../assets/icons/NotifBell.svg';
import DesktopChat from '../../components/DesktopChat/DesktopChat';
import { Route, Switch, withRouter, RouteComponentProps, matchPath, Redirect } from 'react-router-dom';
import Convs from '../../components/Convs/Convs';
import Friends from '../../components/Friends/Friends';
import axios from '../../axios-hb';
import navigate from '../../assets/icons/Vector 2 (1).svg';
import addIcon from '../../assets/icons/AddIcon.svg';
import ContactSearch from '../../components/ContactSearch/ContactSearch';
import Backdrop from '../../elements/Backdrop/Backdrop';
import NotifSD from '../../components/NotifSD/NotifSD';
import logout from '../../assets/icons/logout.svg';


interface AppProps extends RouteComponentProps {
    isAuth: boolean;
    logout: () => void
};

class DesktopMain extends Component <AppProps> {
    _isMounted = false;
    
    state = {
        friends: [],
        searchedContacts: [],
        csShow: false,
        bdShow: false,
        notifShow: false
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

    toggleSearchContact = () => {
        let actualCsState = this.state.csShow;
		let actualBDState = this.state.bdShow;
		this.setState({
			...this.state,
			csShow: !actualCsState,
			bdShow: !actualBDState,
		})
    }
    
    toggleBackDrop = () => {
		let actualBDState = this.state.bdShow;
		this.setState({
			...this.state,
			bdShow : !actualBDState,
            csShow: false,
            notifShow: false
		})
    }
    
    toggleNotifSD = () => {
        let actualNotifSDState = this.state.notifShow;
        let actualBDState = this.state.bdShow;
        
        if (this.state.csShow) {
            actualBDState = false;
        }

		this.setState({
			...this.state,
			notifShow : !actualNotifSDState,
			bdShow: !actualBDState,
			csShow: false
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


    componentWillUnmount() {
		this._isMounted = false;
	}
    render() {
        let authRedirect = null;

        if (!this.props.isAuth) {
            authRedirect = <Redirect to='/'/>
        }
        return (
            <div className={classes.DesktopMain}>
                {authRedirect}
                <div className={classes.Side}>
                    <NotifSD notifShow={this.state.notifShow} blue toggleNotif={this.toggleNotifSD}/>
                    <div className={classes.SideHeader}>
                        <span className={classes.ProfilePicture}></span>
                        <h3>John Doe</h3>
                        <span className={classes.Logout} onClick={this.props.logout}>
                            <span>Log out</span>
                            <input type="image" src={logout} alt="LogOut"/>
                        </span>
                        <span style={{height: "30%", width: "1px", backgroundColor: '#495867'}}></span>
                        <input type="image" src={bell} alt="Notifications" onClick={this.toggleNotifSD}/>
                    </div>
                    <div className={classes.FriendsLayout}>
                        <input type="image" src={navigate} alt=""/>
                        <Friends friends={this.state.friends} friendSelect={this.friendSelectHandler}/>
                        <input style={{transform:'rotate(180deg)'}} type="image" src={navigate} alt=""/>
                    </div>
                    <span style={{height: "1px", width: "100%", backgroundColor: '#495867'}}></span>
                    <div className={classes.ConvsLay}>
                        <ContactSearch 
                            csShow={this.state.csShow} 
                            searchInputHandler={this.searchInputHandler}
                            searchedContacts={this.state.searchedContacts}
                            addContact={this.addContactHandler}
                            blue
                            toggleCs={this.toggleSearchContact}/>  
                        <div className={classes.ChatsHeader}>
                            <h3>Today</h3>
                            <input type="image" src={addIcon} alt="Search" onClick={this.toggleSearchContact}/>
                        </div>
                        <Backdrop clicked={this.toggleBackDrop} bdShow={this.state.bdShow}/>
                        <Convs/>
                    </div>
                </div>
                <div className={classes.Chat}>
                    <Switch>
                        <Route path={`${this.props.match.path}/chat/:id`} exact>
                            <DesktopChat/>
                        </Route>
                        <Route path={`${this.props.match.path}`}>
                            <Logo size="large"/>
                        </Route>
                    </Switch>

                    <Backdrop clicked={this.toggleBackDrop} bdShow={this.state.bdShow}/>
                </div>
            </div>
        )
    }

}

export default withRouter(DesktopMain);