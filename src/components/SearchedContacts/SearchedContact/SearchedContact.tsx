import React from 'react';
import classes from './SearchedContact.module.css';
import add from '../../../assets/icons/AddIconSearch .svg'

const searchedContact = (props: any) => {
    return (
        <li className={classes.SearchedContact}>
            <span className={classes.ContactPicture}></span>
            <span className={classes.ContactName}>{props.contactName}</span>
            <input type="image" src={add} alt=""/>
        </li>
    )
}

export default searchedContact;
