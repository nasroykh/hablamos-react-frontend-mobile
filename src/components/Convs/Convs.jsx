import React from 'react'
import classes from './Convs.module.scss';
import Conv from './Conv/Conv';

const Convs = (props) => {

    let convsList;

    if (props.convs) {
        if (props.convs.length) {
            convsList = props.convs.map(conv => (
                <Conv 
                key={conv._id} 
                id={conv._id} 
                friendId={conv.participants[0]._id} 
                name={conv.participants[0].username}
                groupName={conv.groupName} 
                lastMessage={conv.messages[0]} />
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
