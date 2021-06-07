import React from 'react'
import classes from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {

    let messagesList;

    if (props.messages) {
        messagesList = props.messages.map(message => (
            <Message key={message._id} user={message.sender===props.userId ? true : false} message={message.message} time='2:40pm'/>
        ))
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
