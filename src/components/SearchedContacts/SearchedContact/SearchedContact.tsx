import React from 'react';
import classes from './SearchedContact.module.css';
import add from '../../../assets/icons/AddIconSearch .svg';
import addBlue from '../../../assets/icons/AddIcon.svg';


const searchedContact = (props: any) => {
    return (
        <li className={classes.SearchedContact}>
            <span className={classes.ContactPicture}></span>
            <span className={classes.ContactName}>{props.contactName}</span>
            <input type="image" src={props.blue ? addBlue : add} alt="Add Contact" id={props.id} onClick={props.addContact}/>
        </li>
    )
}

export default searchedContact;
