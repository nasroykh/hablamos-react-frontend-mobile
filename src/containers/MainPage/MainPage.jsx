import React, { useState } from 'react';
import classes from './MainPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Tab from '../../components/Tab/Tab';
import {Switch, Route} from 'react-router-dom';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BackDrop from '../../elements/BackDrop/BackDrop';

const MainPage = () => {

    const [sdShow, setSdShow] = useState(false);
    const [bdShow, setBdShow] = useState(false);

    const sdToggleHandler = () => {
        setBdShow(!bdShow);
        setSdShow(!sdShow);
    }

    return (
        <div className={classes.MainPage}>
            <BackDrop bdShow={bdShow} click={sdToggleHandler}/>
            <SideDrawer sdShow={sdShow} sdToggleHandler={() => setTimeout(sdToggleHandler,300)}/>
            <NavBar sdToggleHandler={sdToggleHandler}/>
            
            <Switch>
                <Route path='/main/convs'>
                    <Tab tabName='convs'/>
                </Route>

                <Route path='/main/addconv'>
                    <Tab tabName='addconv'/>
                </Route>

                <Route path='/main/friends'>
                    <Tab tabName='friends'/>
                </Route>

                <Route path='/main/addcontact'>
                    <Tab tabName='addcontact'/>
                </Route>

                <Route path='/main/addtogroup'>
                    <Tab tabName='addtogroup'/>
                </Route>

                <Route path='/main/creategroup'>
                    <Tab tabName='creategroup'/>
                </Route>

                <Route path='/main/profile'>
                    <Tab tabName='profile'/>
                </Route>

                <Route path='/main/contact'>
                    <Tab tabName='contact'/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainPage
