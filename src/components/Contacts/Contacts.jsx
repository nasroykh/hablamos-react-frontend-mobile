import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import classes from './Contacts.module.scss';
import { fetchFriends } from '../../store/user/user-actions';
import Contact from './Contact/Contact';

const Contacts = (props) => {

    let friendsList;

    if (props.friends) {
        friendsList = props.friends.map(friend => (
            <Contact addContactHandler={props.addContactHandler} status={friend.status} name={friend.username} id={friend._id} key={friend._id} search={props.search}/>
        ))
    } else {
        friendsList = <li className={classes.Null}>No friends</li>
    }

    return (
        <ul 
        className={`${classes.Contacts} ${props.group ? classes.ContactsGroup : ''} ${props.search ? classes.ContactsSearch : ''}`}>
            {friendsList}
        </ul>
    )
}

export default Contacts;
