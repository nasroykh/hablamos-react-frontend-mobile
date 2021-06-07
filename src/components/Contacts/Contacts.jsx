import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './Contacts.module.scss';
import { fetchFriends } from '../../store/user/user-actions';
import Contact from './Contact/Contact';

const Contacts = (props) => {

    let friendsList;

    if (props.friends) {
        if (props.friends.length) {
            friendsList = props.friends.map(friend => (
                <Contact 
                addContactHandler={props.addContactHandler} 
                acceptContactHandler={props.acceptContactHandler}
                openConvHandler={props.openConvHandler}
                status={friend.status} 
                name={friend.username} 
                id={friend._id} 
                key={friend._id} 
                search={props.search} 
                requests={props.requests}/>
            ))
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