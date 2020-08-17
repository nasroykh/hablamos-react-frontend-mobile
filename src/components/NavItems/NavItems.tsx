import React from 'react';
import classes from './NavItems.module.css';
import NavItem from './NavItem/NavItem';

const navItems = (props: any) => {
    return (
        <ul className={classes.NavItems}>
            <NavItem>Chat</NavItem>
            <NavItem>Profile</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>About Us</NavItem>
        </ul>
    )
}

export default navItems;