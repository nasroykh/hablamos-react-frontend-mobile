import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import classes from './Convs.module.scss';
import Conv from './Conv/Conv';
import { fetchConvs, fetchFriends } from '../../store/user/user-actions';

const Convs = (props) => {

    let convsList;

    if (props.convs) {
        convsList = props.convs.map(conv => (
            <Conv key={conv.participants[0]._id} id={conv._id} name={conv.participants[0].username} message='wee' time='2:20pm'/>
        ))
    } else {
        convsList = <li key='null'>No conversations</li>
    }

    return (
        <ul className={classes.Convs}>
            {convsList}
        </ul>
    )
}

export default Convs
