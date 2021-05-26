import React, { useState } from 'react';
import classes from './MainPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Tab from '../../components/Tab/Tab';
import {Switch, Route} from 'react-router-dom';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BackDrop from '../../elements/BackDrop/BackDrop';

const MainPage = (props) => {


    return (
        <div className={classes.MainPage}>
            <BackDrop bdShow={props.bdShow} click={props.sdToggleHandler}/>
            <SideDrawer sdShow={props.sdShow} sdToggleHandler={() => setTimeout(props.sdToggleHandler,300)}/>
            <NavBar sdToggleHandler={props.sdToggleHandler}/>
            
            <Switch>
                <Route exact path='/main/convs'>
                    <Tab tabName='convs'/>
                </Route>

                <Route exact path='/main/convs/add'>
                    <Tab tabName='addconv'/>
                </Route>

                <Route exact path='/main/friends'>
                    <Tab tabName='friends'/>
                </Route>

                <Route exact path='/main/friends/search'>
                    <Tab tabName='addcontact'/>
                </Route>

                <Route exact path='/main/friends/group'>
                    <Tab tabName='addtogroup'/>
                </Route>

                <Route exact path='/main/friends/group/confirm'>
                    <Tab tabName='creategroup'/>
                </Route>

                <Route exact path='/main/profile'>
                    <Tab tabName='profile'/>
                </Route>

                <Route exact path='/main/contact'>
                    <Tab tabName='contact'/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainPage
