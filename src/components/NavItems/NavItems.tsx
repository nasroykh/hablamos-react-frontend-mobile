import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';
import { Link } from 'react-router-dom';

const navItems = (props: any) => {
    return (
        <ul className={classes.NavItems}>
            <NavItem navClick={props.navClick}>Chat</NavItem>
            <NavItem navClick={props.navClick}>Profile</NavItem>
            <NavItem navClick={props.navClick}>Contact</NavItem>
            <NavItem navClick={props.navClick}>About Us</NavItem>
        </ul>
    )
}

export default navItems;