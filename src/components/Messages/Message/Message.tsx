import React from 'react';
import classes from './Message.module.css';

const message = (props: any) => {
    return (
        <li className={props.isUser ? classes.ContUser : classes.ContContact}>
            {props.isUser ? null : <span className={classes.ContactPp}></span>}
            <span className={props.isUser ? classes.UserMes : classes.ContactMes}>{props.Message}</span>
        </li>
    )
}

export default message;