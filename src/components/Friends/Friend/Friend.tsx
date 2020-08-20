import React from 'react';
import classes from './Friend.module.css';

const friend = (props: any) => {
    return (
        <li className={classes.Friend} onClick={props.friendSelect} id={props.id}>
            <span className={classes.FriendPicture}></span>
            <h4>{props.fullname}</h4>
        </li>
    )
}

export default friend;