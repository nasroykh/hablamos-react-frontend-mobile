import React from 'react'
import classes from './Conv.module.scss';
import pic from '../../../assets/default-profile-pic.png';
import {Link} from 'react-router-dom';

const Conv = (props) => {

    // let pictureUrl = `http://localhost:4444/users/${props.friendId}/picture`;
    let pictureUrl = `http://192.168.1.7:4444/users/${props.friendId}/picture?${Date.now()}`;

    return (
        <li className={classes.Conv}>
            <Link to={`/chat?_id=${props.id}`}>
                <img src={pictureUrl} alt="Profile pic"/>
                <h3>{props.groupName ? props.groupName : props.name}</h3>
                <p>{props.message}</p>
                <span>{props.time}</span>
            </Link>
        </li>
    )
}

export default Conv
