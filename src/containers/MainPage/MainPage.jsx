import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './MainPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Tab from '../../components/Tab/Tab';
import {Switch, Route, useHistory} from 'react-router-dom';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BackDrop from '../../elements/BackDrop/BackDrop';
import {logout} from '../../store/auth/auth-actions';
import Notif from '../../components/Notif/Notif';
import {socket} from '../../App';

const MainPage = (props) => {

    let token = useSelector(state => state.auth.token);
    
    const dispatch = useDispatch();
    
    const history = useHistory();

	const [notifShow, setNotifShow] = useState(false);
	const [notifMessage, setNotifMessage] = useState('');
	const [notifLink, setNotifLink] = useState('');

    useEffect(() => {
        console.log(history.location.pathname)

        const clearNotif = () => {
            setTimeout(() => {
                if (history.location.pathname !== '/chat') {
                    setNotifShow(false);
                    setNotifMessage('');
                    setNotifLink('');
                }
            }, 3000);
        };

		socket.on("notify:message", (sender) => {
            if (history.location.pathname !== '/chat') {
                setNotifShow(true);
                setNotifMessage(`New message from ${sender.username}`)
                setNotifLink('/main/convs');
                clearNotif();
            }
            
		});

        socket.on('notify:request', (sender) => {
            if (history.location.pathname !== '/chat') {
                setNotifShow(true);
                setNotifMessage(`${sender.username} sent you a friend request`);
                setNotifLink('/main/friends/requests');
                clearNotif();
            }
        });

        socket.on('notify:accepted', (sender) => {
            if (history.location.pathname !== '/chat') {
                setNotifShow(true);
                setNotifMessage(`${sender.username} accepted your friend request`);
                setNotifLink('/main/friends');
                clearNotif();
            }
        });

    }, [])
    
    const logoutHandler = (e) => {
        e.preventDefault();

        dispatch(logout(token));

        props.sdToggleHandler();

        history.push('/');
    }

    return (
        <div className={classes.MainPage}>
            <BackDrop bdShow={props.bdShow} click={props.sdToggleHandler}/>
            <SideDrawer sdShow={props.sdShow} sdToggleHandler={() => setTimeout(props.sdToggleHandler,300)} logoutHandler={logoutHandler}/>
            <NavBar sdToggleHandler={props.sdToggleHandler}/>
            <Notif notifShow={notifShow} notifLink={notifLink}>{notifMessage}</Notif>
            
            <Switch>
                <Route exact path='/main/convs'>
                    <Tab tabName='convs'/>
                </Route>

                <Route exact path='/main/convs/add'>
                    <Tab tabName='addconv'/>
                </Route>

                <Route exact path='/main/friends'>
                    <Tab tabName='friends'/>
                </Route>

                <Route exact path='/main/friends/requests'>
                    <Tab tabName='requests'/>
                </Route>

                <Route exact path='/main/friends/search'>
                    <Tab tabName='addcontact'/>
                </Route>

                <Route exact path='/main/friends/group'>
                    <Tab tabName='addtogroup'/>
                </Route>

                <Route exact path='/main/friends/group/confirm'>
                    <Tab tabName='creategroup'/>
                </Route>

                <Route exact path='/main/profile'>
                    <Tab tabName='profile'/>
                </Route>

                <Route exact path='/main/contact'>
                    <Tab tabName='contact'/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainPage
