import React from 'react';
import classes from './Conv.module.css';

const conv = (props: any) => {
    return (
        <li className={classes.Conv} onClick={props.convSelect} id={props.id}>
            <span className={classes.ChatPicture}></span>
            <span className={classes.NameAndLastMes}>
                <h4>{props.fullname}</h4>
                <p>Lorem ipsum dolor</p>
            </span>
            <span className={classes.Time}>
                <span>10:00PM</span>
                <span></span>
            </span>
        </li>
    )
}

export default conv;
