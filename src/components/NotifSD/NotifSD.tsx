import React from 'react';
import classes from './NotifSD.module.css';
import Notifs from '../Notifs/Notifs';
import navigate from '../../assets/icons/Vector 2 (1).svg';


const notifSD = (props: any) => {
    return (
        <div className={`${classes.NotifSD} ${props.notifShow ? classes.Open : classes.Close}`}>
            <div className={classes.NotifHeader}>
                <input type="image" src={navigate} alt="" className={classes.HideBtn} onClick={props.toggleNotif}/>
                <h2>Notifications</h2>
                <h4>Friend requests</h4>
            </div>

            <Notifs blue={props.blue} acceptInv={props.acceptInv} requests={props.requests}/>
        </div>
    )
}

export default notifSD
