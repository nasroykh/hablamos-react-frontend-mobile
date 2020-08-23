import React, { Component, SyntheticEvent, ChangeEvent } from 'react';
import classes from './ChatPage.module.css';
import ChatInput from '../../elements/ChatInput/ChatInput';
import BackBtn from '../../elements/BackBtn/BackBtn';
import Messages from '../../components/Messages/Messages';
import axios from '../../axios-hb';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import friend from '../../components/Friends/Friend/Friend';
import socketIOClient from 'socket.io-client'; 
const ENDPOINT = "http://127.0.0.1:4444";


interface MatchParams {
    id: string;
}
interface AppProps extends RouteComponentProps<MatchParams> {
}

class ChatPage extends Component<AppProps> {


    state = {
        messages: [],
        messageValue: '',
        convId: ''
    }

    componentDidMount () {
		const socket = socketIOClient(ENDPOINT);
        let userId = localStorage.getItem('userId');
        let friendId= this.props.match.params.id;

		axios.post('/openConversation', {myProfileID: userId, hisProfileID: friendId})
		.then(res => {
            console.log(res);
            this.setState({...this.state,
                messages: res.data.Details.messages,
                convId: res.data.Details.conversationID
            })
		})
		.catch(err => {
            console.log(err);
        });         

        socket.on('sendMessage', (conversationID: string, newMessage: string) => {
			console.log(conversationID + " & " + newMessage);
		});
    }

    sendMessageHandler = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        let message = this.state.messageValue;
        let userId = localStorage.getItem('userId');

        axios.post('/sendMessage', {
            message: message,
            senderID: userId,
            conversationID: this.state.convId})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    changeMsgInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        let input = event.target.value;
        this.setState({...this.state,
        messageValue: input})
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
                    <Messages messages={this.state.messages}/>
                </div>
                <ChatInput 
                sendMessage={this.sendMessageHandler} 
                msgValue={this.state.messageValue} 
                msgChange={this.changeMsgInputHandler}/>
            </div>
        )
    }
}

export default withRouter(ChatPage);
