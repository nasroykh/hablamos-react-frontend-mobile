import React from 'react'
import classes from './Convs.module.scss';
import Conv from './Conv/Conv';

const Convs = (props) => {

    let convsList;

    if (props.convs) {
        if (props.convs.length) {
            convsList = props.convs.map(conv => {

                let seen;

                if (conv.lastMessage[0].sender !== localStorage.getItem('userId')) {
                    seen = conv.lastMessage[0].seenBy.includes(localStorage.getItem('userId'));
                } else {
                    seen = true;
                }
                
                return (
                    <Conv 
                    key={conv._id} 
                    id={conv._id} 
                    friendId={conv.participants[0]._id} 
                    name={conv.participants[0].username}
                    groupName={conv.groupName} 
                    lastMessage={conv.lastMessage[0]}
                    seen={seen}
                    baseUrl={props.baseUrl} />
                )
            })
        } else {
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
