import React, { Component, SyntheticEvent, ChangeEvent } from 'react';
import classes from './ChatPage.module.css';
import ChatInput from '../../elements/ChatInput/ChatInput';
import BackBtn from '../../elements/BackBtn/BackBtn';
import Messages from '../../components/Messages/Messages';
import axios from '../../axios-hb';
import { withRouter, RouteComponentProps } from 'react-router-dom';


interface MatchParams {
    id: string;
}
interface AppProps extends RouteComponentProps<MatchParams> {
    socket: any
}

class ChatPage extends Component<AppProps> {


    state = {
        messages: [],
        messageValue: '',
        convId: ''
    }

    componentDidMount () {
        let userId = localStorage.getItem('userId');
        let friendId= this.props.match.params.id;
        let token = localStorage.getItem('token');
        let socketId = localStorage.getItem('socketId');
        
        let socket = this.props.socket;
        
        if (socket) {
            socket.on('sendMessage', (conversationID: string, newMessage: any) => {
                console.log(conversationID + " & " + JSON.stringify(newMessage));
                let newMessages = this.state.messages.concat(newMessage);
                this.setState({...this.state, messages: newMessages})
            });
        }

        
		axios.post('/openConversation', {myProfileID: friendId, hisProfileID: userId}, {headers: {Authorization: token, webSocketID: socketId }})
		.then(res => {
            console.log(res);
            if (res.data.Details) {
                if (res.data.Details.messages) {
                    this.setState({...this.state,
                        messages: res.data.Details.messages,
                        convId: res.data.Details.conversationID
                    })
                }
                else {
                    this.setState({...this.state,
                    messages: [],
                    convId: res.data.Details.conversationID
                })
                }
            }
		})
		.catch(err => {
            console.log(err);
        });  

    }

    sendMessageHandler = (event: SyntheticEvent<HTMLInputElement>) => {
        event.preventDefault();
        let message = this.state.messageValue;
        let userId = localStorage.getItem('userId');
        let token = localStorage.getItem('token');
		let socketId = localStorage.getItem('socketId');

        axios.post('/sendMessage', {
            message: message,
            senderID: userId,
            conversationID: this.state.convId}, {headers: {Authorization: token, webSocketID: socketId }})
        .then(res => {
            console.log(res);
            this.setState({...this.state, messageValue: ''})
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
                        <BackBtn Blue backBtn={() => {this.props.history.goBack()}} />
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
