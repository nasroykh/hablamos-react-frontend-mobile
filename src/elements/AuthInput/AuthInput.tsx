import React from 'react';
import classes from './AuthInput.module.css';
import userIcon from '../../assets/icons/user.svg';
import passIcon from '../../assets/icons/padlock.svg';
import nameIcon from '../../assets/icons/name.svg';
import mailIcon from '../../assets/icons/mail.svg';
import closedEye from '../../assets/icons/ClosedEyeIcon.svg';
import openEye from '../../assets/icons/EyeIcon.svg';

const authInput = (props: any) => {

    let inputElement;
    let inputIcon;
    let isPass = false;
    let passEye;
    let passShow = false;

    const passShowHandler = () => {
        let currentPass = passShow;
        passShow = !currentPass;
    }

    switch (props.name) {
        case ('username'):
            inputIcon = userIcon;
            break;
        
        case ('password'):
            inputIcon = passIcon;
            isPass = true;
            if (passShow) {
                passEye = openEye
            } else if (!passShow) {
                passEye = closedEye
            }
            break;

        case ('fullname'):
            inputIcon = nameIcon;
            break;

        case ('email'):
            inputIcon = mailIcon;
            break;
            
        default:
            break;
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = (<input 
                            {...props.elementConfig}
                            value={props.value}
                            onChange={props.inputChange}/>)
    }

    return (
        <div className={props.isAuth ? classes.AuthInput : classes.ProfInput}>
            <img src={inputIcon} alt="" width="18px" />
            {inputElement} 
            {isPass ? <img src={passEye} alt="Show Password" width="18px" onClick={passShowHandler} /> : null}
        </div>
    )
}

export default authInput
