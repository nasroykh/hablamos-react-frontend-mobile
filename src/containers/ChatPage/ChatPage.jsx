import React, { useEffect, useRef, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import classes from './ChatPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Messages from '../../components/Messages/Messages';
import Button from '../../elements/Button/Button';
import BackDrop from '../../elements/BackDrop/BackDrop';
import FormInput from '../../elements/FormInput/FormInput';
import {userActions} from '../../store/user/user-slice';
import {fetchMessages, sendMessage} from '../../store/user/user-actions';
import { socket } from '../../App';


const ChatPage = (props) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const messageInput = useRef();

    let conv = useSelector(state => state.user.selectedConv);
    let userId = useSelector(state => state.user._id);

    const [convId, setConvId] = useState('');
    const [friendId, setFriendId] = useState('');



    useEffect(() => {
        if ((!conv.messages && conv._id) || conv.new ) {
            history.push(`/chat?_id=${conv._id}`)
        }
    }, [conv, history])

    useEffect(() => {
        let query = location.search;
        console.log(history.location);
        query = query.replace('?', '').split('=');
        
        let _id = '';
        let friendId = '';

        if (query[0] === '_id') {
            _id = query[1];
            dispatch(fetchMessages(_id));
            socket.emit('join', _id);
            setConvId(_id);
        } else if (query[0] === 'friendId') {
            friendId = query[1];
            setFriendId(friendId);
            dispatch(userActions.checkIfConvExist({friendId}));
        }


        return () => {
            if (_id) {
                socket.emit('leave', _id);
            }
            dispatch(userActions.leaveConv());
        };

    }, [dispatch, history.location, location.search])

    const sendMessageHandler = (e) => {
        e.preventDefault();

        if (friendId) {
            dispatch(sendMessage(messageInput.current.value, conv._id, friendId));
        } else {
            let part = conv.participants.find(el => el !== userId);
            dispatch(sendMessage(messageInput.current.value, convId, part));
        }
        messageInput.current.value = '';
    }

    return (
        <div className={classes.ChatPage}>
            <BackDrop bdShow={props.bdShow} click={props.sdToggleHandler}/>
            <SideDrawer sdShow={props.sdShow} sdToggleHandler={() => setTimeout(props.sdToggleHandler,300)}/>
            <NavBar chat sdToggleHandler={props.sdToggleHandler}/>
            <div className={classes.ChatHeader}>
                <h2>{conv.friendUsername}</h2>
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
