import React from 'react';
import classes from './SideDrawer.module.scss';
import {ReactComponent as NavConv} from '../../assets/conv-icon.svg';
import {ReactComponent as NavFriends} from '../../assets/friends-icon.svg';
import {ReactComponent as NavProfile} from '../../assets/profile-icon.svg';
import {ReactComponent as NavSet} from '../../assets/settings-icon.svg';
import {ReactComponent as NavLogout} from '../../assets/logout-icon.svg';
import {NavLink} from 'react-router-dom'

const SideDrawer = (props) => {
    return (
        <nav className={`${classes.SideDrawer} ${props.sdShow ? classes.Show : ''}`}>
            <ul>
                <li onClick={props.sdToggleHandler}>
                    <NavLink to='/main/convs' activeClassName={classes.Active}>
                        <NavConv/>
                        <span>Conversations</span>
                    </NavLink>
                </li>
                <li onClick={props.sdToggleHandler}>
                    <NavLink to='/main/friends' activeClassName={classes.Active}>
                        <NavFriends/>
                        <span>Friends</span>
                    </NavLink>
                </li>
                <li onClick={props.sdToggleHandler}>
                    <NavLink to='/main/profile' activeClassName={classes.Active}>
                        <NavProfile/>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li onClick={props.sdToggleHandler}>
                    <NavLink to='/main/settings' activeClassName={classes.Active}>
                        <NavSet/>
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li onClick={props.sdToggleHandler}>
                    <NavLink to='/signin'>
                        <NavLogout/>
                        <span>Logout</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default SideDrawer
