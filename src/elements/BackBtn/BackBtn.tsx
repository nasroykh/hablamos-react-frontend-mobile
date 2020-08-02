import React from 'react';
import classes from './BackBtn.module.css';
import back from '../../assets/icons/back.svg';

const backBtn = (props: any) => {
    return (
        <input type='image' className={classes.BackBtn} src={back} alt='Back button' />       
    )
}

export default backBtn
