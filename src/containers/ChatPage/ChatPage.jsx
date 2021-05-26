import React from 'react';
import classes from './ChatPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Messages from '../../components/Messages/Messages';
import Button from '../../elements/Button/Button';
import BackDrop from '../../elements/BackDrop/BackDrop';
import FormInput from '../../elements/FormInput/FormInput';

const ChatPage = (props) => {
    return (
        <div className={classes.ChatPage}>
            <BackDrop bdShow={props.bdShow} click={props.sdToggleHandler}/>
            <SideDrawer sdShow={props.sdShow} sdToggleHandler={() => setTimeout(props.sdToggleHandler,300)}/>
            <NavBar chat sdToggleHandler={props.sdToggleHandler}/>
            <div className={classes.ChatHeader}>
                <h2>John Doe</h2>
            </div>
            <Messages/>
            <form className={classes.ChatForm}>
                <Button btnType='file-send'/>
                <FormInput type="text" />
                <Button btnType="send-btn" />
            </form>
        </div>
    )
}

export default ChatPage
