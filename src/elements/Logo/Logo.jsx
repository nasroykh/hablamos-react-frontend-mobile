import React from 'react';
import classes from './Logo.module.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as WithText} from '../../assets/logo-with-text.svg';
import {ReactComponent as WithoutText} from '../../assets/logo-without-text.svg';

const Logo = (props) => {
    return (
        <div className={classes.Logo}>
            <Link to='/'>
                {props.text ? <WithText/> : <WithoutText/>}
            </Link>
        </div>
    )
}

export default Logo
