import React from 'react';
import {Link} from 'react-router-dom';
import classes from './TabMenu.module.scss';

const TabMenu = (props) => {
    return (
        <ul className={`${classes.TabMenu} ${props.tabMenuShow ? classes.Show : ''}`}>
            <li onClick={props.tabMenuToggleHandler}>
                <Link to='/main/friends/requests'>
                    Friend Requests
                </Link>
            </li>
            <li onClick={props.tabMenuToggleHandler}>
                <Link to='/main/friends/search'>
                    Search for a friend
                </Link>
            </li>
            <li onClick={props.tabMenuToggleHandler}>
                <Link to='/main/friends/group'>
                    Create a group chat
                </Link>
            </li>
        </ul>
    )
}

export default TabMenu
