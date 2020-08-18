import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../elements/Logo/Logo';
import NavItems from '../NavItems/NavItems';
import { connect } from 'react-redux'; 
import * as actions from '../../store/actions/index'; 
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
    sdShow?: boolean;
    logOut: () => void
}

const sideDrawer: React.FC<Props> = ({sdShow, logOut, history}) => {

    const logOutHandler = () => {
        logOut();
        history.replace('/');
    }

    return (
        <div className={`${classes.SideDrawer} ${sdShow ? classes.Open : classes.Close}`}>
            <div className={classes.SDHeader}>
                <Logo size="small"/>
            </div>
            <nav className={classes.SDBody}>
                <NavItems/>
            </nav>
            <div className={classes.SDFooter}>
                <span onClick={logOutHandler}>Logout</span>
            </div>
        </div>
    )
}

interface MapDispatchToPropsTypes {
	logOut: () => void;
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        logOut: () => dispatch(actions.logOut)
    }
}

export default connect<null, MapDispatchToPropsTypes>(null, mapDispatchToProps)(withRouter(sideDrawer));
