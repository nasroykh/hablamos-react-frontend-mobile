import React from 'react'
import classes from './Tab.module.scss';
import Auxiliary from '../../hoc/Auxiliary';
import Button from '../../elements/Button/Button';
import Convs from '../Convs/Convs';
import Contacts from '../Contacts/Contacts';
import FormInput from '../../elements/FormInput/FormInput';
import pic from '../../assets/demo-profile-pic.jpg';

const Tab = (props) => {
    let tab;


    switch (props.tabName) {
        case 'convs':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Conversations</h2>
                        <Button to='/main/convs/add' btnType='add-conv'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.ConvsTab}` }>
                        <Convs/>
                    </div>
                </Auxiliary>
            );
            break;

        case 'addconv':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Start a new conversation</h2>
                        <Button to='/main/convs' btnType='back-btn'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.ConvsTab}` }>
                        <Contacts/>
                    </div>
                </Auxiliary>
            );
            break;

        case 'friends':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Friends</h2>
                        <Button to='/main/friends/group' btnType='group'/>
                        <Button to='/main/friends/search' btnType='add-contact'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.FriendsTab}` }>
                        <Contacts/>
                    </div>
                </Auxiliary>
            );
            break;

        case 'addcontact':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Find your friends</h2>
                        <Button to='/main/friends' btnType='back-btn'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.AddContactTab}` }>
                        <FormInput type='search' placeholder='Enter username...'/>
                        <Contacts search/>
                    </div>
                </Auxiliary>
            );
            break;

        case 'contact':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>John's profile</h2>
                        <Button to='/main/friends' btnType='back-btn'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.ContactTab}` }>
                        <img src={pic} alt="" />
                        <h1>John Doe</h1>
                        <Button btnType='primary'>Send a message</Button>
                        <Button btnType='secondary'>Remove from friends list</Button>
                    </div>
                </Auxiliary>
            );
            break;

        case 'addtogroup':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Select friends</h2>
                        <Button to='/main/friends' btnType='back-btn'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.GroupTab}` }>
                        <FormInput type='search' placeholder='Enter username...'/>
                        <Contacts group/>
                        <Button btnType='primary' to='/main/friends/group/confirm'>Confirm</Button>
                    </div>
                </Auxiliary>
            );
            break;

        case 'creategroup':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Create a group chat</h2>
                        <Button to='/main/friends/group' btnType='back-btn'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.GroupTab}` }>
                        <FormInput type='search' placeholder='Enter group name...'/>
                        <Button btnType='primary'>Confirm</Button>
                        <Button btnType='secondary' to='/main/friends/group'>Cancel</Button>
                    </div>
                </Auxiliary>
            );
            break;

        case 'profile':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>My profile</h2>
                    </div>
                    <div className={`${classes.TabBody} ${classes.ProfileTab}` }>
                        <div className={classes.ProfilePic}>
                            <img src={pic} alt="" />
                            <h1>John Doe</h1>
                            <Button btnType='secondary'>Change profile picture</Button>
                        </div>
                        <form className={classes.ProfileForm}>
                            <h3>Profile Infos:</h3>
                            <div>
                                <label>Online status:</label>
                                <FormInput select>
                                    <option value="online">Online</option>
                                    <option value="busy">Busy</option>
                                    <option value="offline">Offline</option>
                                </FormInput>
                            </div>
                            <div>
                                <label>First name:</label>
                                <FormInput type="text" />
                            </div>
                            <div>
                                <label>Last name:</label>
                                <FormInput type="text" />
                            </div>
                            <h3>Account Infos:</h3>
                            <div>
                                <label>Old Password:</label>
                                <FormInput type="password" />
                            </div>
                            <div>
                                <label>New Password:</label>
                                <FormInput type="password" />
                            </div>
                            <Button btnType='primary-form'>Confirm</Button>
                            <Button to='/main/profile' btnType='secondary-form'>Cancel</Button>
                        </form>
                    </div>
                </Auxiliary>
            );
            break;
    
        default:
            break;
    }
    return (
        <div className={classes.Tab}>
            {tab}
        </div>
    )
}

export default Tab
