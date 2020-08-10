import React from 'react';
import classes from './Convs.module.css';
import Conv from './Conv/Conv';


const convs = (props: any) => {
    return (
        <ul className={classes.Convs}>
            <Conv/>
            <Conv/>
            <Conv/>
            <Conv/>
            <Conv/>
            <Conv/>
            <Conv/>
            <Conv/>
            <Conv/>
        </ul>
    )
}

export default convs;
