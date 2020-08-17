import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../elements/Logo/Logo';
import NavItems from '../NavItems/NavItems';

interface Props {
    sdShow?: boolean;
}

const sideDrawer: React.FC<Props> = ({sdShow}) => {
    return (
        <div className={`${classes.SideDrawer} ${sdShow ? classes.Open : classes.Close}`}>
            <div className={classes.SDHeader}>
                <Logo size="small"/>
            </div>
            <nav className={classes.SDBody}>
                <NavItems/>
            </nav>
            <div className={classes.SDFooter}>
                <span>Logout</span>
            </div>
        </div>
    )
}

export default sideDrawer
