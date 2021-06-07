import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Notif.module.scss';

const Notif = (props) => {
    return (
        <Link to={props.notifLink} className={`${classes.Notif} ${props.notifShow ? classes.Show : ''}`}>
            {props.children}
        </Link>
    )
}

export default Notif;
