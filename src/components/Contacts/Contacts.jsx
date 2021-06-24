import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './Contacts.module.scss';
import { fetchFriends } from '../../store/user/user-actions';
import Contact from './Contact/Contact';

const Contacts = (props) => {

    let convs = useSelector(state => state.user.convs);

    let friendsList;

    if (props.friends) {
        if (props.friends.length) {
            friendsList = props.friends.map(friend => { 
                
                if (props.addConv) {
                    for (let i = 0; i < convs.length; i++) {
                        if (convs[i].participants[0]._id === friend._id) {
                            return null
                        }
                    }
                }

                return (
                <Contact 
                    addContactHandler={props.addContactHandler} 
                    cancelAddContactHandler={props.cancelAddContactHandler}
                    acceptContactHandler={props.acceptContactHandler}
                    refuseContactHandler={props.refuseContactHandler}
                    openConvHandler={props.openConvHandler}
                    status={friend.status} 
                    name={friend.username} 
                    id={friend._id} 
                    key={friend._id} 
                    search={props.search} 
                    requests={props.requests}
                    sent={friend.sent}
                    group={props.group}
                    addToGroupHandler={props.addToGroupHandler}
                    isDarkMode={props.isDarkMode}/>
            )})
        } else {
            if (props.search) {
                friendsList = 'Enter a username above'
            } else if (props.requests) {
                friendsList = 'No requests'
            } else {
                friendsList = 'No friends'
            }
            friendsList = <li className={classes.NoFriend}>{friendsList}</li>
        }
    }

    return (
        <ul 
        className={`${classes.Contacts} ${props.group ? classes.ContactsGroup : ''} ${props.search ? classes.ContactsSearch : ''}`}>
            {friendsList}
        </ul>
    )
}

export default Contacts;
