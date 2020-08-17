import React from 'react'
import classes from './Backdrop.module.css';
import Aux from '../../hoc/Aux';

const backdrop = (props: any) => {
    return (
        <Aux>
            {props.bdShow ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null}
        </Aux>
    )
}

export default backdrop
