import React from 'react';
import Button from '../../elements/Button/Button';
import Logo from '../../elements/Logo/Logo';
import classes from './NavBar.module.scss';
import pic from '../../assets/demo-profile-pic.jpg';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <Button btnType='profile-pic' to='/profile'><img src={pic} alt="" /></Button>
            <Logo/>
            <Button btnType='menu-btn'/>
        </div>
    )
}

export default NavBar
