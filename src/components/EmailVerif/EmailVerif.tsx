import React from 'react';
import classes from './EmailVerif.module.css';

const emailVerif = (props: any) => {
    return (
        <div className={classes.EmailVerif}>
            <div className={classes.Header}>

            </div>
            <span>We've sent a link to your email address<br/>to confirm your account.<br/>Please verify your inbox</span>
        </div>
    )
}

export default emailVerif;