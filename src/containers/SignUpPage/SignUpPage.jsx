import React from 'react'
import classes from './SignUpPage.module.scss';
import Logo from '../../elements/Logo/Logo';
import Button from '../../elements/Button/Button';
import FormInput from '../../elements/FormInput/FormInput';


const SignUpPage = () => {
    return (
        <div className={classes.SignUpPage}>
            <Logo text />
            <h2>Sign up now for free to chat with your friends!</h2>
            <form className={classes.SignUpForm}>
                <FormInput sign type="text" placeholder="Username"/>
                <FormInput sign type="email" placeholder="Email"/>
                <FormInput sign type="password" placeholder="Password"/>
                <FormInput sign type="text" placeholder="First name"/>
                <FormInput sign type="text" placeholder="Last name"/>
                <Button btnType='primary-form'>Confirm</Button>
                <Button btnType='secondary-form' to='/'>Cancel</Button>
            </form>
        </div>
    )
}

export default SignUpPage
