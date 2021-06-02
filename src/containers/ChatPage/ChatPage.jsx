import React, { useEffect, useRef } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import classes from './ChatPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Messages from '../../components/Messages/Messages';
import Button from '../../elements/Button/Button';
import BackDrop from '../../elements/BackDrop/BackDrop';
import FormInput from '../../elements/FormInput/FormInput';
import {userActions} from '../../store/user/user-slice';
import {sendMessage} from '../../store/user/user-actions';

const ChatPage = (props) => {

    const dispatch = useDispatch();
    const params = useParams();

    const messageInput = useRef();

    let conv = useSelector(state => state.user.messages);
    let userId = useSelector(state => state.user._id);

    useEffect(() => {
        dispatch(userActions.loadMessages({_id: params.id}));
    }, [dispatch, params.id])

    const sendMessageHandler = (e) => {
        e.preventDefault();
        dispatch(sendMessage(messageInput.current.value, params.id));
        messageInput.current.value = '';
    }

    return (
        <div className={classes.ChatPage}>
            <BackDrop bdShow={props.bdShow} click={props.sdToggleHandler}/>
            <SideDrawer sdShow={props.sdShow} sdToggleHandler={() => setTimeout(props.sdToggleHandler,300)}/>
            <NavBar chat sdToggleHandler={props.sdToggleHandler}/>
            <div className={classes.ChatHeader}>
                <h2>John Doe</h2>
            </div>
            <Messages messages={conv.messages} userId={userId}/>
            <form className={classes.ChatForm} onSubmit={sendMessageHandler}>
                <Button btnType='file-send'/>
                <FormInput type="text" inputRef={messageInput} />
                <Button btnType="send-btn" />
            </form>
        </div>
    )
}

export default ChatPage
