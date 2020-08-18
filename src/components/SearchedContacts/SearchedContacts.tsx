import React from 'react';
import classes from './SearchedContacts.module.css';
import SearchedContact from './SearchedContact/SearchedContact';

const searchedContacts = (props: any) => {

    let contacts ;

    if (props.searchedContacts.length) {
        contacts = props.searchedContacts.map((contact: { username: string, _id: string }) => {
            return <SearchedContact 
            contactName={contact.username}
            key={contact._id}
            id={contact._id}
            addContact={props.addContact} />
        })
    }
    else if (!props.searchedContacts.length) {
        contacts = <span>No result</span>;
    }


    return (
        <ul className={classes.SearchedContacts}>
            {contacts}
        </ul>
    )
}

export default searchedContacts;
