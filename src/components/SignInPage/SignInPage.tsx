import React from 'react';
import classes from './SignInPage.module.css';
import Logo from '../../elements/Logo/Logo';
import LargeBtn from '../../elements/LargeBtn/LargeBtn';
import AuthInput from '../../elements/AuthInput/AuthInput';

const signInPage = (props: any) => {

    const formElementsArray = [];
    for (let key in props.signInForm) {
        formElementsArray.push({
            id: key,
            config: props.signInForm[key]
        });
    }

    return (
        <div className={classes.SignInPage}>
            <div className={classes.Header}>
                <Logo width="80px"/>
                <h2>Welcome</h2>
                <p>Login to <strong>Hablamos</strong> to continue</p>
            </div>
            <form className={classes.SIForm}>
                {formElementsArray.map(formElement => (
                    <AuthInput 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        name={formElement.config.name} />
                ))}
                <span>Forgot your password ?</span>
                <LargeBtn>Continue</LargeBtn>
            </form>
            <div className={classes.orLine}>
                <span></span>
                <p>OR</p>
                <span></span>
            </div>
            <div className={classes.Footer}>
                <p>Create a new account <br/>Fast & easy !</p>
                <LargeBtn>Sign Up</LargeBtn>
            </div>
        </div>
    )
}

export default signInPage;