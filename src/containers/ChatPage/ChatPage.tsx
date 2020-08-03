import React, { Component } from 'react';
import classes from './ChatPage.module.css';
import ChatInput from '../../elements/ChatInput/ChatInput';
import BackBtn from '../../elements/BackBtn/BackBtn';

class ChatPage extends Component {


    state = {
        ChatForm : {
			emoji: {
				elementType: 'input',
				elementConfig : {
					type: 'image',
				},
				name: 'emoji'
            },
            message: {
				elementType: 'input',
				elementConfig : {
					type: 'text',
				},
				name: 'message'
            },
            image: {
				elementType: 'input',
				elementConfig : {
					type: 'image',
				},
				name: 'image'
            },
            send: {
				elementType: 'input',
				elementConfig : {
					type: 'image',
				},
				name: 'send'
            },
        }
    }

    render() {

        return (
            <div className={classes.ChatPage}>
                <div className={classes.ChatLayout}>
                    <div className={classes.Header}>
                        <BackBtn Blue />
                        <span className={classes.ContactInfos}>
                            <span></span>
                            <h2>John Doe</h2>
                        </span>
                    </div>
                    <ul className={classes.Convs}>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor sit amet <br/> abekais heresxsxqxsl <br/>j sxjnsxjnsqx</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvContact}>
                            <span className={classes.ContactPp}></span>
                            <span className={classes.ContactMes}>Lorem ipsum dolor</span>
                        </li>
                        <li className={classes.ConvUser}>
                            <span className={classes.UserMes}>Lorem ipsum dolor sit amet aissa el kebch</span>
                        </li>
                    </ul>
                </div>
                <ChatInput/>
            </div>
        )
    }
}

export default ChatPage;
