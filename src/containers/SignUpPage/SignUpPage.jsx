import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import classes from './SignUpPage.module.scss';
import Logo from '../../elements/Logo/Logo';
import Button from '../../elements/Button/Button';
import FormInput from '../../elements/FormInput/FormInput';
import {signUp} from '../../store/auth/auth-actions';

const SignUpPage = () => {

    const dispatch = useDispatch();

    const usernameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();

    const signUpHandler = (e) => {
        e.preventDefault();

        let signUpInfos = {
            username: usernameInput.current.value,
            email: emailInput.current.value,
            password: passwordInput.current.value,
            firstName: firstNameInput.current.value,
            lastName: lastNameInput.current.value,
        };

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
                    placeholder="Username (Required)"                    
                    inputRef={usernameInput}
                    name='username'
                    required/>
                <FormInput 
                    sign 
                    type="email" 
                    placeholder="Email (Required)"                    
                    inputRef={emailInput}
                    name='email'
                    required/>
                <FormInput 
                    sign 
                    type="password" 
                    placeholder="Password (Required)"                    
                    inputRef={passwordInput}
                    name='password'
                    required/>
                <FormInput 
                    sign 
                    type="text" 
                    placeholder="First name"                    
                    inputRef={firstNameInput}
                    name='firstName'/>
                <FormInput 
                    sign 
                    type="text" 
                    placeholder="Last name"                    
                    inputRef={lastNameInput}
                    name='lastName'/>
                <Button btnType='primary-form'>Confirm</Button>
                <Button btnType='secondary-form' to='/'>Cancel</Button>
            </form>
        </div>
    )
}

export default SignUpPage
