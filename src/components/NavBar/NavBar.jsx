import React from 'react';
import {useSelector} from 'react-redux';
import Button from '../../elements/Button/Button';
import Logo from '../../elements/Logo/Logo';
import classes from './NavBar.module.scss';
import pic from '../../assets/default-profile-pic.png';

const NavBar = (props) => {

    const _id = useSelector(state => state.user._id);
    
    // let pictureUrl = `http://localhost:4444/users/${_id}/picture`;
    // let pictureUrl = `http://192.168.1.8:4444/users/${_id}/picture?${Date.now()}`;
    let pictureUrl = `https://fierce-inlet-31066.herokuapp.com/users/${_id}/picture?${Date.now()}`;
    
    return (
        <div className={classes.NavBar}>
            {props.chat ? <Button btnType='chat-back-btn' to='/'/> : <Button btnType='profile-pic' to='/main/profile'><img src={pictureUrl} alt="Profile pic" loading='lazy'/></Button>}
            <Logo/>
            <Button btnType='menu-btn' click={props.sdToggleHandler}/>
        </div>
    )
}

export default NavBar;
