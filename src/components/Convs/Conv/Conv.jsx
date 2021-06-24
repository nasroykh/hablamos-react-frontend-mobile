import React from 'react'
import classes from './Conv.module.scss';
import pic from '../../../assets/default-profile-pic.png';
import {Link} from 'react-router-dom';

const Conv = (props) => {

    // let pictureUrl = `http://localhost:4444/users/${props.friendId}/picture`;
    let pictureUrl = `http://192.168.1.8:4444/users/${props.groupName ? props.id : props.friendId}/picture?${Date.now()}`;

    let lastMessage;

    let currentDate = new Date().getDate().toString();
    let currentMonth = new Date().getMonth()+1;
    currentMonth = currentMonth.toString();
    
    let hours = new Date(props.lastMessage.sentAt).getHours().toString();
    let day = new Date(props.lastMessage.sentAt).getDate().toString();
    let month = new Date(props.lastMessage.sentAt).getMonth() + 1;
    month = month.toString();
    let minutes = new Date(props.lastMessage.sentAt).getMinutes().toString();
    
    if (minutes.length === 1) {
        minutes = "0" + minutes;
    }
    
    if (hours.length === 1) {
        hours = "0" + hours;
    }

    
    let lastMessageTime;
    
    if (currentDate === day && currentMonth === month) {
        lastMessageTime = `${hours}:${minutes}`;
        
    } else {
        if (month.length === 1) {
            month = "0" + month;
        }
        if (day.length === 1) {
            day = "0" + day;
        }
        lastMessageTime = `${hours}:${minutes} - ${day}/${month}`;
    }

    if (props.lastMessage.sender === props.friendId ) {
        if (props.lastMessage.file) {
            lastMessage = 'Sent you a file'
        } else {
            lastMessage = props.lastMessage.message;
        }
    } else {
        if (props.lastMessage.file) {
            lastMessage = 'You: Sent a file'
        } else {
            lastMessage = `You: ${props.lastMessage.message}`;
        }
    }
    
    lastMessage = lastMessage.length>20 ? `${lastMessage.slice(0, 20)}...` : lastMessage 

    let convName;
    
    if (props.groupName) {
        convName = props.groupName;
    } else {
        convName = props.name;
    }

    convName = convName.length>15 ? `${convName.slice(0, 15)}...` : convName;

    return (
        <li className={classes.Conv}>
            <Link to={`/chat?_id=${props.id}`}>
                <img src={pictureUrl} alt="Profile pic" loading='lazy'/>
                <h3>{convName}</h3>
                <p>{lastMessage}</p>
                <span>{lastMessageTime}</span>
            </Link>
        </li>
    )
}

export default Conv
