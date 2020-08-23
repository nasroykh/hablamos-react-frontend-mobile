import React from 'react';
import classes from './Notifs.module.css';
import Notif from './Notif/Notif';
import { request } from 'http';

const notifs = (props: any) => {
    let requests: [];
    let displayedRequests;
    if (props.requests.length) {
        requests = props.requests;
        displayedRequests = requests.map((request: {fullName: string, ID: string}) => (
            <Notif blue={props.blue} acceptInv={props.acceptInv} fullName={request.fullName} key={request.ID} id={request.ID}/>
        ))
    }
    return (
        <ul className={classes.Notifs}>
            {displayedRequests}
        </ul>
    )
}

export default notifs;
