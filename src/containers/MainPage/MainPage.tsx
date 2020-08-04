import React, { Component } from 'react';
import classes from './MainPage.module.css';
import ChatsLayout from '../../components/ChatsLayout/ChatsLayout';
import ProfileLayout from '../../components/ProfileLayout/ProfileLayout';
import Logo from '../../elements/Logo/Logo';
import bell from '../../assets/icons/NotifBell.svg';
import ChatPage from '../ChatPage/ChatPage';

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
				<div className={classes.MainWindow}>
					<div className={classes.Side}>
						<div className={classes.SideHeader}>
							<span className={classes.ProfilePicture}></span>
							<h3>John Doe</h3>
							<input type="image" src={bell} alt=""/>
						</div>
						<div className={classes.ConvsLay}>
							<div className={classes.ChatsHeader}>
								<h3>Today</h3>
							</div>
							<ul className={classes.Convs}>
								<li className={classes.Conv}>
									<span className={classes.ChatPicture}></span>
									<span className={classes.NameAndLastMes}>
										<h4>John Doe</h4>
										<p>Lorem Ipsum Dolor Sit Amet</p>
									</span>
									<span className={classes.Time}>
										<span>5:12PM</span>
										<span></span>
									</span>
								</li>
								<li className={classes.Conv}>
									<span className={classes.ChatPicture}></span>
									<span className={classes.NameAndLastMes}>
										<h4>John Doe</h4>
										<p>Lorem Ipsum Dolor Sit Amet</p>
									</span>
									<span className={classes.Time}>
										<span>5:12PM</span>
										<span></span>
									</span>
								</li>
								<li className={classes.Conv}>
									<span className={classes.ChatPicture}></span>
									<span className={classes.NameAndLastMes}>
										<h4>John Doe</h4>
										<p>Lorem Ipsum Dolor Sit Amet</p>
									</span>
									<span className={classes.Time}>
										<span>5:12PM</span>
										<span></span>
									</span>
								</li>
								<li className={classes.Conv}>
									<span className={classes.ChatPicture}></span>
									<span className={classes.NameAndLastMes}>
										<h4>John Doe</h4>
										<p>Lorem Ipsum Dolor Sit Amet</p>
									</span>
									<span className={classes.Time}>
										<span>5:12PM</span>
										<span></span>
									</span>
								</li>
								
							</ul>
						</div>
					</div>
					<div className={classes.Chat}>
						<div className={classes.ChatHeader}>
							<span className={classes.ProfilePicture}></span>
							<h3>John Doe</h3>
						</div>
						<div className={classes.ConvLay}>
							<ChatPage />
						</div>
					</div>
				</div>
                <ChatsLayout/>
                {/* <ProfileLayout profileEditForm={this.state.profileEditForm} /> */}
            </div>
        )
    }
}

export default MainPage;