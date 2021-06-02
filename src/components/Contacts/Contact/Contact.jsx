import React from 'react';
import classes from './Contact.module.scss';
import pic from '../../../assets/demo-profile-pic.jpg';
import {Link} from 'react-router-dom';
import Button from '../../../elements/Button/Button';

const Contact = (props) => {

    let statusClass = classes.Offline;

    switch (props.status) {
        case 'Online':
            statusClass = classes.Online;
            break;
    
        case 'Offline':
            statusClass = classes.Offline
            break;

        default:
            break;
    }

    return (
        <li className={classes.Contact}>
            <Link to="#">
                <img src={pic} alt=""/>
                <h3>{props.name}</h3>
                {props.search ? <Button click={props.addContactHandler} id={props.id} btnType='add-contact-btn'/> : 
                <span className={`${classes.StatusDot} ${statusClass}`}></span>}
                {props.group ? <input type="checkbox"/> : null}
            </Link>
        </li>
    )
}

export default Contact;