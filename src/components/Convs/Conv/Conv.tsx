import React from 'react';
import classes from './Conv.module.css';

const conv = (props: any) => {
    return (
        <li className={classes.Conv}>
            <span className={classes.ChatPicture}></span>
            <span className={classes.NameAndLastMes}>
                <h4>John Doe</h4>
                <p>Lorem Ipsum Dolor Sit Amet</p>
            </span>
            <span className={classes.Time}>
                <span>5:12PM</span>
                <span></span>
            </span>
        </li>
    )
}

export default conv;
