import React from 'react';
import classes from './Messages.module.css';
import Message from './Message/Message';

const messages = (props: any) => {
    return (
        <ul className={classes.Messages}>
            <Message isUser Message="Lorem Ipsum Dolor Sit"/>
            <Message Message="Lorem Ipsum Dolor Sit Amet"/>
            <Message isUser Message="Lorem Ipsum Dolor Sit Amet"/>
            <Message Message="Lorem Ipsum Dolor Sit Amet"/>
            <Message isUser Message="Lorem Ipsum Dolor Sit Amet"/>
            <Message Message="Lorem Ipsum Dolor Sit Amet"/>
        </ul>
    )
}

export default messages
