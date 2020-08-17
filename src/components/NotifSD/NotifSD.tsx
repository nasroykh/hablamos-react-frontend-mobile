import React from 'react';
import classes from './NotifSD.module.css';
import Notifs from '../Notifs/Notifs';

const notifSD = (props: any) => {
    return (
        <div className={`${classes.NotifSD} ${props.notifShow ? classes.Open : classes.Close}`}>
            <div className={classes.NotifHeader}>
                <h2>Notifications</h2>
                <h4>Friend requests</h4>
            </div>

            <Notifs/>
        </div>
    )
}

export default notifSD
