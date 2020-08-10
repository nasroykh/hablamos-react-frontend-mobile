import React, {Component} from 'react';
import classes from './DesktopMain.module.css';
import Logo from '../../elements/Logo/Logo';
import bell from '../../assets/icons/NotifBell.svg';
import DesktopChat from '../../components/DesktopChat/DesktopChat';
import { Route, Switch, withRouter, RouteComponentProps, matchPath } from 'react-router-dom';
import Convs from '../../components/Convs/Convs';

type AppProps = RouteComponentProps;


class DesktopMain extends Component <AppProps> {

    render() {
        return (
            <div className={classes.DesktopMain}>
                <div className={classes.Side}>
                    <div className={classes.SideHeader}>
                        <span className={classes.ProfilePicture}></span>
                        <h3>John Doe</h3>
                        <input type="image" src={bell} alt=""/>
                    </div>
                    <div className={classes.ConvsLay}>
                        <div className={classes.ChatsHeader}>
                            <h3>Today</h3>
                        </div>
                        <Convs/>
                    </div>
                </div>
                <div className={classes.Chat}>
                    <Switch>
                        <Route path={`${this.props.match.path}/chat`} exact>
                            <DesktopChat/>
                        </Route>
                        <Route path={`${this.props.match.path}`}>
                            <Logo width="80px"/>
                        </Route>
                    </Switch>


                </div>
            </div>
        )
    }

}

export default withRouter(DesktopMain);