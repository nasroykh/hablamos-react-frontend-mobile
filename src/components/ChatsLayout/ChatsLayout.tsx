import React from 'react';
import classes from './ChatsLayout.module.css';
import addIcon from '../../assets/icons/AddIcon.svg';
import Convs from '../Convs/Convs';
import ContactSearch from '../../components/ContactSearch/ContactSearch';
import Friends from '../Friends/Friends';

const chatsLayout = (props: any) => {
    return (
        <div className={classes.ChatsLayout}>
            <div className={classes.Header}>
                <h2>Chat</h2>
                <Friends friends={props.friends} friendSelect={props.friendSelect}/>
            </div>
            <div className={classes.Chats}>
                <ContactSearch 
                csShow={props.csShow}
                searchInputHandler={props.searchInputHandler}
                searchedContacts={props.searchedContacts}
                addContact={props.addContact}/>
                
                <div className={classes.ChatsHeader}>
                    <h3>Today</h3>
                    <input type="image" src={addIcon} alt="Add a contact" onClick={props.toggleSearchContact}/>
                </div>
                <Convs convs={props.convs} convSelect={props.convSelect}/>
            </div>
        </div>
    )
}

export default chatsLayout;
