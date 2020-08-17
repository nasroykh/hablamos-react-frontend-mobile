import React from 'react';
import classes from './Notifs.module.css';
import Notif from './Notif/Notif';

const notifs = (props: any) => {
    return (
        <ul className={classes.Notifs}>
            <Notif/>
            <Notif/>
            <Notif/>
        </ul>
    )
}

export default notifs;
