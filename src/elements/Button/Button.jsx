import React from 'react';
import classes from './Button.module.scss';
import Auxiliary from '../../hoc/Auxiliary';
import {Link} from 'react-router-dom';
import {ReactComponent as MenuBtn} from '../../assets/menu-btn.svg';
import {ReactComponent as AddConv} from '../../assets/add-conv-icon.svg';
import {ReactComponent as BackBtn} from '../../assets/back-btn.svg';
import {ReactComponent as AddFriend} from '../../assets/add-friend-icon.svg';
import {ReactComponent as CancelAdd} from '../../assets/cancel-add-icon.svg';
import {ReactComponent as Group} from '../../assets/group-icon.svg';
import {ReactComponent as Request} from '../../assets/request-icon.svg';
import {ReactComponent as FileIcon} from '../../assets/file-icon.svg';
import {ReactComponent as SendBtn} from '../../assets/send-btn.svg';
import {ReactComponent as ChatBackBtn} from '../../assets/chat-back-btn.svg';


const Button = (props) => {
    let btn;

    switch (props.btnType) {
        case 'primary':
            btn = <Link to={props.to} className={classes.Primary}>{props.children}</Link>;
            break;
    
        case 'secondary':
            btn = <Link to={props.to} className={classes.Secondary}>{props.children}</Link>;
            break;

        case 'primary-form':
            btn = <button type='submit' onClick={props.click} className={classes.Primary}>{props.children}</button>;
            break;
    
        case 'secondary-form':
            btn = <Link to={props.to} className={classes.Secondary}>{props.children}</Link>;
            break;

        case 'menu-btn':
            btn = <button onClick={props.click} className={classes.MenuBtn}><MenuBtn/></button>;
            break;

        case 'profile-pic':
            btn = <Link to={props.to} className={classes.ProfilePic}>{props.children}</Link>;
            break;

        case 'add-conv':
            btn = <Link to={props.to} className={classes.TabHeaderBtn}><AddConv/></Link>;
            break;

        case 'back-btn':
            btn = <Link to={props.to} className={classes.TabHeaderBtn}><BackBtn/></Link>;
            break;

        case 'add-contact':
            btn = <Link to={props.to} onClick={props.click} className={classes.TabHeaderBtn}><AddFriend/></Link>;
            break;

        case 'add-contact-btn':
            btn = <button onClick={props.click} id={props.id} className={classes.TabHeaderBtn}>{props.cancel ? <CancelAdd/> : <AddFriend/>}</button>;
            break;

        case 'group':
            btn = <Link to={props.to} className={classes.TabHeaderBtn}><Group/></Link>;
            break;

        case 'request':
            btn = <Link to={props.to} className={classes.TabHeaderBtn}><Request/></Link>;
            break;

        case 'chat-back-btn':
            btn = <Link to={props.to} className={classes.ChatBackBtn}><ChatBackBtn/></Link>;
            break;

        case 'file-send':
            btn = <button onClick={props.click} className={classes.FileSend}><FileIcon/></button>;
            break;
        
        case 'send-btn':
            btn = <button type='submit' onClick={props.click} className={classes.SendBtn}><SendBtn/></button>;
            break;
        
        case 'tab-menu':
            btn = <button onClick={props.click} className={classes.TabMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>;
            break;

        default:
            break;
    }
    return (
        <Auxiliary>
            {btn}
        </Auxiliary>
    )
}

export default Button
