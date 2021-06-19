import React from 'react'
import classes from './Message.module.scss';
import pic from '../../../assets/default-profile-pic.png';

const Message = (props) => {

    // let pictureUrl = `http://localhost:4444/users/${props.friendId}/picture`;
    let pictureUrl = `http://192.168.1.7:4444/users/${props.sender}/picture?${Date.now()}`;

    let fileUrl = `http://192.168.1.7:4444/convs/${props.id}/file`;
    // let fileUrl = `http://localhost:4444/convs/${props.id}/file`;

    return (
        <li className={`${classes.Message} ${props.user ? classes.UserMessage : ''}`}>
            {props.user ? null : <img src={pictureUrl} alt="Profile pic"/>}
            <span>{props.isFile ? <img src={fileUrl} alt="" loading='lazy' /> : props.message}</span>
            <span>{props.time}</span>
        </li>
    )
}

export default Message
