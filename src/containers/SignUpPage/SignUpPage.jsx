import React from 'react';
import {Redirect} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import classes from './SignUpPage.module.scss';
import Logo from '../../elements/Logo/Logo';
import Button from '../../elements/Button/Button';
import FormInput from '../../elements/FormInput/FormInput';
import {authActions} from '../../store/auth-slice';
import {signUp} from '../../store/auth-actions';

const SignUpPage = () => {

    const dispatch = useDispatch();

    const signUpInfos = useSelector(state => (
        {
            username: state.auth.username,
            email: state.auth.email,
            password: state.auth.password,
            firstName: state.auth.firstName,
            lastName: state.auth.lastName
        }
    ));

    const inputChangeHandler = (e) => {
        dispatch(authActions.inputChangeHandler({
            name: e.target.name,
            value: e.target.value
        }));
    }

    const signUpHandler = (e) => {
        e.preventDefault();

        dispatch(signUp(signUpInfos));
    }

    return (
        <div className={classes.SignUpPage}>
            <Logo text />
            <h2>Sign up now for free to chat with your friends!</h2>
            <form className={classes.SignUpForm} onSubmit={signUpHandler}>
                <FormInput 
                    sign 
                    type="text" 
                    placeholder="Username"                    
                    onChangeHandler={inputChangeHandler}
                    name='username'/>
                <FormInput 
                    sign 
                    type="email" 
                    placeholder="Email"                    
                    onChangeHandler={inputChangeHandler}
                    name='email'/>
                <FormInput 
                    sign 
                    type="password" 
                    placeholder="Password"                    
                    onChangeHandler={inputChangeHandler}
                    name='password'/>
                <FormInput 
                    sign 
                    type="text" 
                    placeholder="First name"                    
                    onChangeHandler={inputChangeHandler}
                    name='firstName'/>
                <FormInput 
                    sign 
                    type="text" 
                    placeholder="Last name"                    
                    onChangeHandler={inputChangeHandler}
                    name='lastName'/>
                <Button btnType='primary-form'>Confirm</Button>
                <Button btnType='secondary-form' to='/main/convs'>Cancel</Button>
            </form>
        </div>
    )
}

export default SignUpPage
