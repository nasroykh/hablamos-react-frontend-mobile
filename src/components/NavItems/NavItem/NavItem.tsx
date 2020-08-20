import React from 'react';
import classes from './NavItem.module.css';

const navItem = (props: any) => {
    return (
        <li className={classes.NavItem} onClick={props.navClick} id={props.children}>
            {props.children}
        </li>
    )
}

export default navItem;