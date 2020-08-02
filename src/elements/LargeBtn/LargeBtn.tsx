import React from 'react'
import classes from './LargeBtn.module.css';

const largeBtn = (props: any) => {

    return (
        <button type="submit" className={classes.LargeBtn}>
            {props.children}
        </button>
    )
}

export default largeBtn;