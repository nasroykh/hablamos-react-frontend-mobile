import React from 'react';
import classes from './ContactSearch.module.css';
import AuthInput from '../../elements/AuthInput/AuthInput';
import SearchedContacts from '../SearchedContacts/SearchedContacts';

const contactSearch = (props: any) => {
    return (
        <div className={`${classes.ContactSearch} ${props.csShow ? classes.Open : classes.Close}`}>
            <input className={classes.SearchInput} type="search" placeholder="Enter Username or Fullname"  onChange={props.searchInputHandler} name="" id=""/>
            <SearchedContacts searchedContacts={props.searchedContacts} addContact={props.addContact}/>
        </div>
    )
}

export default contactSearch;
