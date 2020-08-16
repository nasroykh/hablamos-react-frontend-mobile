import React, { Component } from 'react';
import classes from './MainPage.module.css';
import ChatsLayout from '../../components/ChatsLayout/ChatsLayout';
import ProfileLayout from '../../components/ProfileLayout/ProfileLayout';
import Logo from '../../elements/Logo/Logo';
import bell from '../../assets/icons/NotifBell.svg';
import DesktopMain from '../DesktopMain/DesktopMain';
import {Route, Switch, RouteComponentProps, withRouter, Redirect} from 'react-router-dom';
import ChatPage from '../ChatPage/ChatPage';

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
		}
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
                    <input type="image" src={bell} alt="Notifications" width="25px"/>
                    <Logo width="35px"/>
                    <span className={classes.ProfilePicture}></span>
                </div>

				<Switch>

					<Route path={`${this.props.match.path}/profile`}>
						<ProfileLayout profileEditForm={this.state.profileEditForm} />
					</Route>
					
					<Route path={this.props.match.path}>
						<ChatsLayout/>
					</Route>
				</Switch>

            </div>
        )
    }
}

export default withRouter(MainPage);