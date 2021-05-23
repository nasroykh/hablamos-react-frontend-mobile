import React from 'react';
import classes from './SignInPage.module.scss';
import Logo from '../../elements/Logo/Logo';
import FormInput from '../../elements/FormInput/FormInput';
import Button from '../../elements/Button/Button';

const SignInPage = () => {
    return (
        <div className={classes.SignInPage}>
            <Logo text />
            <h2>Login now and chat with your friends!</h2>
            <form className={classes.SignInForm}>
                <FormInput sign type="text" placeholder="Username/Email"/>
                <FormInput sign type="password" placeholder="Password"/>
                <Button btnType='primary-form'>Confirm</Button>
                <Button btnType='secondary-form' to='/'>Cancel</Button>
            </form>
        </div>
    )
}

export default SignInPage
