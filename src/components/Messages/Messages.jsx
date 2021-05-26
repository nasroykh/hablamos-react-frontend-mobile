import React from 'react'
import classes from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {
    return (
        <ul className={classes.Messages}>
            <Message user message='Hey there! how is it going mate i miss you so much' time='2:40pm'/>
            <Message message='Hey there!' time='2:40pm'/>
            <Message message='Hey there!' time='2:40pm'/>
            <Message user message='Hey there!' time='2:40pm'/>
            <Message message='Hey there!' time='2:40pm'/>
            <Message user message='Hey there!' time='2:40pm'/>
            <Message message='Hey there!' time='2:40pm'/>
            <Message message='Hey there!' time='2:40pm'/>
            <Message user message='Hey there!' time='2:40pm'/>
            <Message user message='Hey there!' time='2:40pm'/>
        </ul>
    )
}

export default Messages
