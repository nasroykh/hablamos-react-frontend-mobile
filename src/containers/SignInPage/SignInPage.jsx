import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import classes from './SignInPage.module.scss';
import Logo from '../../elements/Logo/Logo';
import FormInput from '../../elements/FormInput/FormInput';
import Button from '../../elements/Button/Button';
import {login} from '../../store/auth/auth-actions';

const SignInPage = () => {

    const dispatch = useDispatch();

    const identifierInput = useRef();
    const passwordInput = useRef();

    const loginHandler = (e) => {
        e.preventDefault();

        let loginInfos = {
            identifier: identifierInput.current.value,
            password: passwordInput.current.value
        }

        dispatch(login(loginInfos));
    }

    return (
        <div className={classes.SignInPage}>
            <Logo text />
            <h2>Login now and chat with your friends!</h2>
            <form className={classes.SignInForm} onSubmit={loginHandler}>
                <FormInput 
                    sign 
                    type="text" 
                    placeholder="Username/Email" 
                    inputRef={identifierInput}
                    name='identifier'
                    required/>
                <FormInput 
                    sign 
                    type="password" 
                    placeholder="Password" 
                    inputRef={passwordInput}
                    name='password'
                    required/>
                <Button btnType='primary-form'>Confirm</Button>
                <Button btnType='secondary-form' to='/'>Cancel</Button>
            </form>
        </div>
    )
}

export default SignInPage
