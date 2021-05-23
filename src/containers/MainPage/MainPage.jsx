import React from 'react';
import classes from './MainPage.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Tab from '../../components/Tab/Tab';
import {Switch, Route} from 'react-router-dom';

const MainPage = () => {
    return (
        <div className={classes.MainPage}>
            <NavBar/>
            
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
            </Switch>
        </div>
    )
}

export default MainPage
