import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Contact.module.scss';
import pic from '../../../assets/default-profile-pic.png';
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

    let pictureUrl = `https://fierce-inlet-31066.herokuapp.com/users/${props.id}/picture?${Date.now()}`;
    // let pictureUrl = `http://192.168.1.8:4444/users/${props.id}/picture?${Date.now()}`;
    // let pictureUrl = `http://localhost:4444/users/${props.id}/picture`;
    
    const selectedFriends = useSelector(state => state.user.selectedFriends);

    let isSelected = selectedFriends.includes(props.id);

    let contact = (
            <Link to={`/chat?friendId=${props.id}`} onClick={props.openConvHandler}>
                <img src={pictureUrl} alt="Profile pic" loading='lazy'/>
                <h3>{props.name}</h3>
                <span className={`${classes.StatusDot} ${statusClass}`}></span>
            </Link>
    );

    if (props.search) {
        contact = (
            <Link to="#">
                <img src={pictureUrl} alt="Profile pic" loading='lazy'/>
                <h3>{props.name}</h3>
                {props.sent ? <Button click={props.cancelAddContactHandler} cancel id={props.id} btnType={'add-contact-btn'}/> : <Button click={props.addContactHandler} id={props.id} btnType='add-contact-btn'/>}
            </Link>
        )
    } else if (props.group) {
        contact = (
            <Link to="#" id={props.id} className={`${isSelected ? classes.Selected : ''}`} onClick={props.addToGroupHandler}>
                <img src={pictureUrl} alt="Profile pic" loading='lazy'/>
                <h3>{props.name}</h3>
                <span className={`${classes.StatusDot} ${statusClass}`}></span>
            </Link>
        )
    } else if (props.requests) {
        contact = (
            <Link to="#">
                <img src={pictureUrl} alt="Profile pic" loading='lazy'/>
                <h3>{props.name}</h3>
                <Button click={props.acceptContactHandler} id={props.id} btnType='add-contact-btn'/> 
                <Button click={props.refuseContactHandler} cancel id={props.id} btnType='add-contact-btn'/> 
            </Link>
        )
    }

    

    return (
        <li className={`${classes.Contact} ${props.group ? (props.isDarkMode ? '' : classes.LightMode) : ''}`}>
            {contact}
        </li>
    )
}

export default Contact;