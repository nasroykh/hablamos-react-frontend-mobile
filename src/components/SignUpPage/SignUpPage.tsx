import React from 'react';
import classes from './SignUpPage.module.css';
import Logo from '../../elements/Logo/Logo';
import LargeBtn from '../../elements/LargeBtn/LargeBtn';
import AuthInput from '../../elements/AuthInput/AuthInput';
import BackBtn from '../../elements/BackBtn/BackBtn';
import { NavLink } from 'react-router-dom';

const signUpPage = (props: any) => {

    const formElementsArray = [];
    for (let key in props.signUpForm) {
        formElementsArray.push({
            id: key,
            config: props.signUpForm[key]
        });
    }

    return (
        <div className={classes.Container}>
            <div className={classes.SignUpPage}>
                <div className={classes.Header}>
                    <NavLink to='/'><BackBtn/></NavLink>
                    <Logo width="80px"/>
                    <h2>Welcome</h2>
                    <p>Sign up to chat with your friends</p>
                </div>
                <form className={classes.SUForm} onSubmit={props.onSignUpHandler}>
                    {formElementsArray.map(formElement => (
                        <AuthInput 
                            isAuth
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            name={formElement.config.name}
                            inputChange={props.inputChange} />
                    ))}
                    <LargeBtn>Create a new account</LargeBtn>
                </form>
            </div>
            <div className={classes.SideLogo}>
                <Logo width="80px"/>
            </div>
        </div>

    )
}

export default signUpPage;
