import React from 'react';
import classes from './ChatsLayout.module.css';
import addIcon from '../../assets/icons/AddIcon.svg';
import Convs from '../Convs/Convs';
import ContactSearch from '../../components/ContactSearch/ContactSearch';


const chatsLayout = (props: any) => {
    return (
        <div className={classes.ChatsLayout}>
            <div className={classes.Header}>
                <h2>Chat</h2>
                <ul className={classes.Contacts}>
                    <li className={classes.Contact}>
                        <span className={classes.ContactPicture}></span>
                        <h4>John Doe</h4>
                    </li>
                    <li className={classes.Contact}>
                        <span className={classes.ContactPicture}></span>
                        <h4>John Doe</h4>
                    </li>
                </ul>
            </div>
            <div className={classes.Chats}>
                <ContactSearch 
                csShow={props.csShow} 
                searchInputHandler={props.searchInputHandler}
                searchedContacts={props.searchedContacts}/>
                
                <div className={classes.ChatsHeader}>
                    <h3>Today</h3>
                    <input type="image" src={addIcon} alt="Add a contact" onClick={props.toggleSearchContact}/>
                </div>
                <Convs/>
            </div>
        </div>
    )
}

export default chatsLayout;
