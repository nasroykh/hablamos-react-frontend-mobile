import React from 'react'
import classes from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {

    let messagesList;

    if (props.messages) {
        messagesList = props.messages.map(message => { 
            let hours = new Date(message.sentAt).getHours().toString();
            let minutes = new Date(message.sentAt).getMinutes().toString();
            
            if (minutes.length === 1) {
                minutes = "0" + minutes;
            }

            if (hours.length === 1) {
                hours = "0" + hours;
            }
            
            let formattedTime = `${hours}:${minutes}`;


            return (
            <Message key={message._id} user={message.sender===props.userId ? true : false} message={message.message} time={formattedTime}/>
        )})
    } else {
        messagesList = <li key='notfound' className={classes.NoMessage}>Start a conversation by saying 'Hi!'</li>
    }

    return (
        <ul className={classes.Messages}>
            {messagesList}
        </ul>
    )
}

export default Messages
