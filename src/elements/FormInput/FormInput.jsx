import React from 'react'
import classes from './FormInput.module.scss';
import Auxiliary from '../../hoc/Auxiliary';

const FormInput = (props) => {

    let input;

    if (props.select) {
        input = (<select className={`${classes.FormInput} ${classes.FormSelect}`}>{props.children}</select>);
    } else {
        input = (
            <input 
            type={props.type}
            placeholder={props.placeholder}
            className={`${props.sign ? classes.SignForm : classes.FormInput}`} 
            onChange={props.onChangeHandler}
            name={props.name}/>   
        )
    }

    return (
        <Auxiliary>
            {input}
        </Auxiliary>
    )
}

export default FormInput;
