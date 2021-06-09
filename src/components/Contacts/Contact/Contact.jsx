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

    let contact = (
            <Link to={`/chat?friendId=${props.id}`} onClick={props.openConvHandler}>
                <img src={pic} alt=""/>
                <h3>{props.name}</h3>
                {props.search ? <Button click={props.addContactHandler} id={props.id} btnType='add-contact-btn'/> : 
                <span className={`${classes.StatusDot} ${statusClass}`}></span>}
                {props.group ? <input type="checkbox"/> : null}
            </Link>
    );

    if (props.search) {
        contact = (
            <Link to="#">
                <img src={pic} alt=""/>
                <h3>{props.name}</h3>
                {props.sent ? <Button click={props.cancelAddContactHandler} cancel id={props.id} btnType={'add-contact-btn'}/> : <Button click={props.addContactHandler} id={props.id} btnType='add-contact-btn'/>}
            </Link>
        )
    } else if (props.group) {
        contact = (
            <Link to="#">
                <img src={pic} alt=""/>
                <h3>{props.name}</h3>
                <span className={`${classes.StatusDot} ${statusClass}`}></span>
                <input type="checkbox"/>
            </Link>
        )
    } else if (props.requests) {
        contact = (
            <Link to="#">
                <img src={pic} alt=""/>
                <h3>{props.name}</h3>
                <Button click={props.acceptContactHandler} id={props.id} btnType='add-contact-btn'/> 
                <Button click={props.refuseContactHandler} cancel id={props.id} btnType='add-contact-btn'/> 
            </Link>
        )
    }

    

    return (
        <li className={classes.Contact}>
            {contact}
        </li>
    )
}

export default Contact;