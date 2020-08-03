import React from 'react';
import classes from './ChatsLayout.module.css';
import addIcon from '../../assets/icons/AddIcon.svg';

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
                <div className={classes.ChatsHeader}>
                    <h3>Today</h3>
                    <input type="image" src={addIcon} alt="Add a contact"/>
                </div>
                <ul className={classes.Convs}>
                    <li className={classes.Conv}>
                        <span className={classes.ChatPicture}></span>
                        <span className={classes.NameAndLastMes}>
                            <h4>John Doe</h4>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </span>
                        <span className={classes.Time}>
                            <span>5:12PM</span>
                            <span></span>
                        </span>
                    </li>
                    <li className={classes.Conv}>
                        <span className={classes.ChatPicture}></span>
                        <span className={classes.NameAndLastMes}>
                            <h4>John Doe</h4>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </span>
                        <span className={classes.Time}>
                            <span>5:12PM</span>
                            <span></span>
                        </span>
                    </li>
                    <li className={classes.Conv}>
                        <span className={classes.ChatPicture}></span>
                        <span className={classes.NameAndLastMes}>
                            <h4>John Doe</h4>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </span>
                        <span className={classes.Time}>
                            <span>5:12PM</span>
                            <span></span>
                        </span>
                    </li>
                    <li className={classes.Conv}>
                        <span className={classes.ChatPicture}></span>
                        <span className={classes.NameAndLastMes}>
                            <h4>John Doe</h4>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </span>
                        <span className={classes.Time}>
                            <span>5:12PM</span>
                            <span></span>
                        </span>
                    </li>
                    <li className={classes.Conv}>
                        <span className={classes.ChatPicture}></span>
                        <span className={classes.NameAndLastMes}>
                            <h4>John Doe</h4>
                            <p>Lorem Ipsum Dolor Sit Amet</p>
                        </span>
                        <span className={classes.Time}>
                            <span>5:12PM</span>
                            <span></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default chatsLayout;
