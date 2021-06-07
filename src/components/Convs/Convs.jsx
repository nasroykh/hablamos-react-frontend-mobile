import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import classes from './Convs.module.scss';
import Conv from './Conv/Conv';

const Convs = (props) => {

    let convsList;

    if (props.convs) {
        if (props.convs.length) {
            convsList = props.convs.map(conv => (
                <Conv key={conv.participants[0]._id} id={conv._id} name={conv.participants[0].username} message='wee' time='2:20pm'/>
            ))
        } else {
            console.log('no convs')
            convsList = <li key='null' className={classes.NoConv}>No conversations</li>
        }
    } 

    return (
        <ul className={classes.Convs}>
            {convsList}
        </ul>
    )
}

export default Convs
