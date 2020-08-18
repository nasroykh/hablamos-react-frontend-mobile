import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';

const friends = (props: any) => {

    let friends: [] = props.friends;
    let displayedFriends;

    if (friends.length) {
        displayedFriends = friends.map((friend: {fullName: string}) => (
            <Friend fullname={friend.fullName} />
        ))
    }

    return (
        <ul className={classes.Friends}>
            {displayedFriends}
        </ul>
    )
}

export default friends;
