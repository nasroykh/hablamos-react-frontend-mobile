import React from 'react';
import {Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import classes from './SignInPage.module.scss';
import Logo from '../../elements/Logo/Logo';
import FormInput from '../../elements/FormInput/FormInput';
import Button from '../../elements/Button/Button';
import {authActions} from '../../store/auth-slice';
import {login} from '../../store/auth-actions';

const SignInPage = () => {

    const dispatch = useDispatch();

    let loginInfos = useSelector(state => (
        {
            identifier: state.auth.identifier,
            password: state.auth.password
        }
    ));

    const inputChangeHandler = (e) => {
        dispatch(authActions.inputChangeHandler({
            name: e.target.name,
            value: e.target.value
        }));
    }

    const loginHandler = (e) => {
        e.preventDefault();

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
                    onChangeHandler={inputChangeHandler}
                    name='identifier'/>
                <FormInput 
                    sign 
                    type="password" 
                    placeholder="Password" 
                    onChangeHandler={inputChangeHandler}
                    name='password'/>
                <Button btnType='primary-form'>Confirm</Button>
                <Button btnType='secondary-form' to='/'>Cancel</Button>
            </form>
        </div>
    )
}

export default SignInPage
