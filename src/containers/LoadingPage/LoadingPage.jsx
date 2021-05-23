import React from 'react';
import classes from './LoadingPage.module.scss';
import Logo from '../../elements/Logo/Logo';


const LoadingPage = () => {
    return (
        <div className={classes.LoadingPage}>
            <Logo text/>
        </div>
    )
}

export default LoadingPage
