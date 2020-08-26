import React from 'react';
import classes from './BackBtn.module.css';
import backSalmon from '../../assets/icons/back.svg';
import backBlue from '../../assets/icons/Vector 2 (1).svg';


const backBtn = (props: any) => {
    return (
        <input type='image' onClick={props.backBtn} className={props.Blue ? classes.BackBtnChat : classes.BackBtnSU} src={props.Blue ? backBlue : backSalmon} alt='Back button' />       
    )
}

export default backBtn
