import React, { Component } from 'react';
import classes from './MainPage.module.css';
import ChatsLayout from '../../components/ChatsLayout/ChatsLayout';
import ProfileLayout from '../../components/ProfileLayout/ProfileLayout';
import Logo from '../../elements/Logo/Logo';
import bell from '../../assets/icons/NotifBell.svg';

class MainPage extends Component {

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
        return (
            <div className={classes.MainPage}>
                <div className={classes.Header}>
                    <input type="image" src={bell} alt="Notifications" width="25px"/>
                    <Logo width="35px"/>
                    <span className={classes.ProfilePicture}></span>
                </div>
                <ChatsLayout/>
                {/* <ProfileLayout profileEditForm={this.state.profileEditForm} /> */}
            </div>
        )
    }
}

export default MainPage;