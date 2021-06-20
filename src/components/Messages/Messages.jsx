import React, { useEffect, useRef } from 'react'
import classes from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {

    let messagesList;

    let messagesRef = useRef();

    useEffect(() => {
        if (props.messages) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
            console.log(messagesRef.current.scrollTop);
        }
    }, [props.messages]);

    if (props.messages) {
        messagesList = props.messages.map(message => { 
            
            let formattedTime;

            let currentDate = new Date().getDate().toString();
            let currentMonth = new Date().getMonth()+1;
            currentMonth = currentMonth.toString();
            
            let hours = new Date(message.sentAt).getHours().toString();
            let minutes = new Date(message.sentAt).getMinutes().toString();
            let day = new Date(message.sentAt).getDate().toString();
            let month = new Date(message.sentAt).getMonth() + 1;
            month = month.toString();
            
            if (minutes.length === 1) {
                minutes = "0" + minutes;
            }

            if (hours.length === 1) {
                hours = "0" + hours;
            }

            if (currentDate === day && currentMonth === month) {
                formattedTime = `${hours}:${minutes}`;
                
            } else {
                if (month.length === 1) {
                    month = "0" + month;
                }
                if (day.length === 1) {
                    day = "0" + day;
                }
                formattedTime = `${hours}:${minutes} - ${day}/${month}`;
            }
            
            
            
            

            return (
            <Message 
                key={message._id} 
                friendId={props.friendId[0]} 
                user={message.sender===props.userId ? true : false} 
                message={message.message} 
                time={formattedTime}
                id={message._id}
                isFile={message.file ? true : false}
                sender={message.sender}/>
        )})
    } else {
        messagesList = <li key='notfound' className={classes.NoMessage}>Start a conversation by saying 'Hi!'</li>
    }

    return (
        <ul className={classes.Messages} ref={messagesRef}>
            {messagesList}
        </ul>
    )
}

export default Messages
