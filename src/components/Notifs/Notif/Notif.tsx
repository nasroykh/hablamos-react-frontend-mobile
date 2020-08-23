import React from 'react';
import classes from './Notif.module.css';
import accept from '../../../assets/icons/accept.svg';
import refuse from '../../../assets/icons/refuse.svg';
import blueRefuse from '../../../assets/icons/blueRefuse.svg';
import blueAccept from '../../../assets/icons/blueAccept.svg';

const notif = (props: any) => {
    return (
        <li className={classes.Notif}>
            <span className={classes.ContactPicture}></span>
            <span className={classes.ContactName}>{props.fullName}</span>
            <span className={classes.ContactYN}>
                <input type="image" src={props.blue ? blueAccept : accept} alt="" id={props.id} onClick={props.acceptInv}/>
                <input type="image" src={props.blue ? blueRefuse : refuse} alt=""/>
            </span>
        </li>
    )
}

export default notif;
