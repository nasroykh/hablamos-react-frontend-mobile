import React from 'react';
import classes from './Messages.module.css';
import Message from './Message/Message';

const messages = (props: any) => {

    let messages: [] = props.messages;
    let userId = localStorage.getItem('userId');


    let displayedMessages = messages.map((msg: {message: string, sentFrom: {ID: string} }, index) => {
        if (msg.sentFrom.ID === userId) {
            return <Message isUser Message={msg.message} key={index}/>
        }
        else {
            return <Message Message={msg.message} key={index}/>
        }
    })

    return (
        <ul className={classes.Messages}>
            {displayedMessages}
        </ul>
    )
}

export default messages
