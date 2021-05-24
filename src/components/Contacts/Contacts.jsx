import React from 'react';
import classes from './Contacts.module.scss';
import Conv from './Contact/Contact';

const Contacts = (props) => {
    return (
        <ul 
        className={`${classes.Contacts} ${props.group ? classes.ContactsGroup : ''} ${props.search ? classes.ContactsSearch : ''}`}>
            <Conv search={props.search} group={props.group} name='John Doe'/>
            <Conv search={props.search} group={props.group} name='John Doe'/>
            <Conv search={props.search} group={props.group} name='John Doe'/>
            <Conv search={props.search} group={props.group} name='John Doe'/>
            <Conv search={props.search} group={props.group} name='John Doe'/>
            <Conv search={props.search} group={props.group} name='John Doe'/>
            <Conv search={props.search} group={props.group} name='John Doe'/>
            <Conv search={props.search} group={props.group} name='Abdeka Doe'/>
        </ul>
    )
}

export default Contacts
