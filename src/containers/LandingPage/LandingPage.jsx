import React from 'react';
import classes from './LandingPage.module.scss';
import Logo from '../../elements/Logo/Logo';
import Button from '../../elements/Button/Button'
import LandingImage from '../../elements/LandingImage/LandingImage';

const LandingPage = () => {
    return (
        <div className={classes.LandingPage}>
            <Logo text/>
            <h1>Hablamos®, a free and easy-to-use chat app</h1>
            <div className={classes.LandingImage}>
                <LandingImage/>
            </div>
            <Button to='/signup' btnType='primary'>Create an account</Button>
            <h2>Got an account? Login now!</h2>
            <Button to='/signin' btnType='secondary'>Login</Button>
        </div>
    )
}

export default LandingPage;