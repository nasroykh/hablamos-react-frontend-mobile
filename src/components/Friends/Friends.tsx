import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const friends = (props: any) => {
    
    let displayedFriends;
    let friends: [];
    
    if (props.friends) {
        if (props.friends.length) {
            friends= props.friends;
            displayedFriends = friends.map((friend: {fullName: string, _id: string}) => (
                <Friend fullname={friend.fullName} key={friend._id} id={friend._id} friendSelect={props.friendSelect}/>
            ))
        }
    }

    else {
        displayedFriends = (<span>There's nothing to show</span>);
    }

    return (
        <ul className={classes.Friends}>
            {displayedFriends}
        </ul>
    )
}

export default friends;
