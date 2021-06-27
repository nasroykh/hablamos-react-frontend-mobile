import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import classes from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {

    let messagesList;

    let messagesRef = useRef();

    let isSeen;

    let friends = useSelector(state => state.user.friends);

    useEffect(() => {
        if (props.messages) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
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
            
            
            

            if (message.sender===props.userId && (message.seenBy ? message.seenBy.length : false)) {
                if (props.friendId.length > 1) {
                    isSeen = 'Seen by '
                    for (let i = 0; i < props.friendId.length; i++) {
                        if (message.seenBy.includes(props.friendId[i]._id)) {
                            isSeen += `${props.friendId[i].username}, `;
                        }
                    }
                    isSeen = isSeen.slice(0, isSeen.length-2)
                } else {
                    isSeen = 'Seen';
                }
            }  else {
                isSeen = '';
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
                sender={message.sender}
                seen={message.seenBy ? message.seenBy.length : false}/>
        )})
    } else {
        messagesList = <li key='notfound' className={classes.NoMessage}>Start a conversation by saying 'Hi!'</li>
    }

    return (
        <ul className={classes.Messages} ref={messagesRef}>
            {messagesList}
            <span className={classes.Seen}>{isSeen}</span>
        </ul>
    )
}

export default Messages;
