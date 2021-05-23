import React from 'react'
import classes from './Convs.module.scss';
import Conv from './Conv/Conv';

const Convs = () => {
    return (
        <ul className={classes.Convs}>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
            <Conv name='John Doe' message='Hey' time='5:30pm'/>
        </ul>
    )
}

export default Convs
