import React from 'react';
import classes from './Contact.module.scss';
import pic from '../../../assets/demo-profile-pic.jpg';
import {Link} from 'react-router-dom';

const Contact = (props) => {
    return (
        <li className={classes.Contact}>
            <Link to="#">
                <img src={pic} alt=""/>
                <h3>{props.name}</h3>
                {props.search ? null : <span></span>}
                {props.group ? <input type="checkbox"/> : null}
            </Link>
        </li>
    )
}

export default Contact;