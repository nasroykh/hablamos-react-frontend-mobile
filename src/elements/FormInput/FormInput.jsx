import React from 'react'
import classes from './FormInput.module.scss';

const FormInput = (props) => {
    return (
        <input 
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.sign ? classes.SignForm : classes.FormInput}`} />    
    )
}

export default FormInput;
