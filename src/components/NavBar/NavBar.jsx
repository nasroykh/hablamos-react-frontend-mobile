import React from 'react';
import {useSelector} from 'react-redux';
import Button from '../../elements/Button/Button';
import Logo from '../../elements/Logo/Logo';
import classes from './NavBar.module.scss';
import pic from '../../assets/default-profile-pic.png';

const NavBar = (props) => {

    const _id = useSelector(state => state.user._id);
    
    // let pictureUrl = `http://localhost:4444/users/${_id}/picture`;
    let pictureUrl = `http://192.168.1.7:4444/users/${_id}/picture`;
    
    return (
        <div className={classes.NavBar}>
            {props.chat ? <Button btnType='chat-back-btn' to='/main/convs'/> : <Button btnType='profile-pic' to='/'><img src={pictureUrl} alt="Profile pic"/></Button>}
            <Logo/>
            <Button btnType='menu-btn' click={props.sdToggleHandler}/>
        </div>
    )
}

export default NavBar;
