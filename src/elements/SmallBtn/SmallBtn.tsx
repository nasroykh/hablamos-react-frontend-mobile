import React from 'react';
import classes from './SmallBtn.module.css';

const smallBtn = (props: any) => {
    return (
        <button type="submit" className={classes.SmallBtn}>
            {props.children}
        </button>
    )
}

export default smallBtn;
