import React from 'react';
import classes from './Notif.module.css';
import accept from '../../../assets/icons/accept.svg';
import refuse from '../../../assets/icons/refuse.svg';

const notif = (props: any) => {
    return (
        <li className={classes.Notif}>
            <span className={classes.ContactPicture}></span>
            <span className={classes.ContactName}>John Doe</span>
            <span className={classes.ContactYN}>
                <input type="image" src={accept} alt=""/>
                <input type="image" src={refuse} alt=""/>
            </span>
        </li>
    )
}

export default notif;
