import React from 'react';
import classes from './SignUpPage.module.css';
import Logo from '../../elements/Logo/Logo';
import LargeBtn from '../../elements/LargeBtn/LargeBtn';
import AuthInput from '../../elements/AuthInput/AuthInput';
import BackBtn from '../../elements/BackBtn/BackBtn';

const signUpPage = (props: any) => {

    const formElementsArray = [];
    for (let key in props.signUpForm) {
        formElementsArray.push({
            id: key,
            config: props.signUpForm[key]
        });
    }

    return (
        <div className={classes.SignUpPage}>
            <div className={classes.Header}>
                <BackBtn/>
                <Logo width="80px"/>
                <h2>Welcome</h2>
                <p>Sign up to chat with your friends</p>
            </div>
            <form className={classes.SUForm}>
                {formElementsArray.map(formElement => (
                    <AuthInput 
                        isAuth
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        name={formElement.config.name} />
                ))}
                <LargeBtn>Create a new account</LargeBtn>
            </form>
        </div>
    )
}

export default signUpPage;
