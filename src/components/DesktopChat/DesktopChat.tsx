import React from 'react';
import classes from './DesktopChat.module.css';
import Aux from '../../hoc/Aux';
import ChatPage from '../../containers/ChatPage/ChatPage';

const desktopChat = (props: any) => {
    return (
        <Aux>
            <div className={classes.ChatHeader}>
                <span className={classes.ProfilePicture}></span>
                <h3>John Doe</h3>
            </div>
            <div className={classes.ConvLay}>
                <ChatPage socket={props.socket} />
            </div>
        </Aux>
    )
}

export default desktopChat
