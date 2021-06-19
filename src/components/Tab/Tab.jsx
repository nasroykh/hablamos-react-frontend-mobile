import React, { useEffect, useState, useRef } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import classes from './Tab.module.scss';
import pic from '../../assets/default-profile-pic.png';
import {ReactComponent as ImageIcon} from '../../assets/file-icon.svg';
import Auxiliary from '../../hoc/Auxiliary';
import Button from '../../elements/Button/Button';
import Convs from '../Convs/Convs';
import Contacts from '../Contacts/Contacts';
import FormInput from '../../elements/FormInput/FormInput';
import TabMenu from '../TabMenu/TabMenu';
import { 
    fetchConvs, 
    fetchFriends, 
    contactSearch, 
    addContact, 
    fetchRequests, 
    acceptContact,
    cancelAddContact,
    refuseContact,
    createGroupChat,
    updateProfile,
    uploadPicture } from '../../store/user/user-actions';
import { userActions } from '../../store/user/user-slice';

const Tab = (props) => {
    let tab;

    const dispatch = useDispatch();

    const history = useHistory();

    const groupNameInput = useRef();
    const usernameInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();
    const oldPasswordInput = useRef();
    const newPasswordInput = useRef();
    const statusSelect = useRef();
    
    let convs = useSelector(state => state.user.convs);
    let friends = useSelector(state => state.user.friends);
    let contacts = useSelector(state => state.user.foundContacts);
    let requests = useSelector(state => state.user.friendRequests);
    let selectedFriends = useSelector(state => state.user.selectedFriends);
    let selectedConv = useSelector(state => state.user.selectedConv);
    let user = useSelector(state => state.user)
    
    useEffect(() => {
        switch (props.tabName) {
            case 'convs':
                dispatch(fetchConvs());
                break;
        
            case 'friends':
            case 'addconv':
            case 'addtogroup':
                dispatch(fetchFriends());
                break;

            case 'requests':
                dispatch(fetchRequests());
                break;

            default:
                break;
        }

        if (selectedConv._id) {
            history.push(`/chat?_id=${selectedConv._id}`);
        }
    }, [dispatch, history, props.tabName, selectedConv])


    const contactSearchHandler = (e) => {
        dispatch(contactSearch(e.target.value));
    }

    const addContactHandler = (e) => {
        dispatch(addContact(e.currentTarget.id));
    }

    const cancelAddContactHandler = (e) => {
        dispatch(cancelAddContact(e.currentTarget.id));
    }

    const acceptContactHandler = (e) => {
        dispatch(acceptContact(e.currentTarget.id));
    }

    const refuseContactHandler = (e) => {
        dispatch(refuseContact(e.currentTarget.id));
    }

    const addToGroupHandler = (e) => {
        e.preventDefault();

        dispatch(userActions.addToGroup({_id: e.target.id}));
    }

    const createGroupHandler = () => {
        dispatch(createGroupChat(groupNameInput.current.value, selectedFriends));
    }

    const pictureChangeHandler = (e) => {
        e.preventDefault();

        let pictureToUpload = new FormData();

        pictureToUpload.append('picture', e.target.files[0]);

        dispatch(uploadPicture(pictureToUpload));
    }

    const profileUpdateHandler = (e) => {
        e.preventDefault();

        let username = usernameInput.current.value;
        let firstName = firstNameInput.current.value;
        let lastName = lastNameInput.current.value;
        let oldPassword = oldPasswordInput.current.value;
        let newPassword = newPasswordInput.current.value;
        let status = statusSelect.current.value;

        dispatch(updateProfile(firstName, lastName, username, status, oldPassword, newPassword));

        usernameInput.current.value = '';
        firstNameInput.current.value = '';
        lastNameInput.current.value = '';
        oldPasswordInput.current.value = '';
        newPasswordInput.current.value = '';
    }

    switch (props.tabName) {
        case 'convs':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Conversations</h2>
                        <Button to='/main/convs/add' btnType='add-conv'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.ConvsTab}` }>
                        <Convs convs={convs}/>
                    </div>
                </Auxiliary>
            );
            break;

        case 'addconv':
            //fetch friends and pass it to Contacts component
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Start a new conversation</h2>
                        <Button to='/main/convs' btnType='back-btn'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.ConvsTab}` }>
                        <Contacts friends={friends} addConv />
                    </div>
                </Auxiliary>
            );
            break;

        case 'friends':
            //fetch friends and pass it to Contacts component
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Friends</h2>
                        <Button btnType='tab-menu' click={props.tabMenuToggleHandler}/>
                        <TabMenu friends tabMenuShow={props.tabMenuShow} tabMenuToggleHandler={props.tabMenuToggleHandler}/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.FriendsTab}` }>
                        <Contacts friends={friends} />
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
                        <FormInput type='search' placeholder='Enter username...' onChange={contactSearchHandler}/>
                        <Contacts search friends={contacts} addContactHandler={addContactHandler} cancelAddContactHandler={cancelAddContactHandler}/>
                    </div>
                </Auxiliary>
            );
            break;

        case 'requests':
            //fetch friends and pass it to Contacts component
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Friend requests</h2>
                        <Button to='/main/friends' btnType='back-btn'/>
                    </div>
                    <div className={`${classes.TabBody} ${classes.FriendsTab}` }>
                        <Contacts friends={requests} requests acceptContactHandler={acceptContactHandler} refuseContactHandler={refuseContactHandler}/>
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
                        <Contacts friends={friends} group addToGroupHandler={addToGroupHandler}/>
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
                    <div className={`${classes.TabBody} ${classes.ConfirmGroupTab}` }>
                        <FormInput type='search' placeholder='Enter group name...' inputRef={groupNameInput}/>
                        <Button btnType='primary-form' click={createGroupHandler}>Confirm</Button>
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
                            <img src={`http://192.168.1.7:4444/users/${user._id}/picture?${Date.now()}`} alt="Profile pic" />
                            <h1>{user.username}</h1>
                            <label className={classes.PictureUpload}>
                                <input type="file" accept='image/*' onChange={pictureChangeHandler}/>
                                Change profile picture
                                <ImageIcon/>
                            </label>
                        </div>
                        <form className={classes.ProfileForm}>
                            <h3>Update profile Infos:</h3>
                            <div>
                                <label>Online status:</label>
                                <FormInput select inputRef={statusSelect}>
                                    <option value="Online" selected={user.status==='Online' ? true : false}>Online</option>
                                    <option value="Busy" selected={user.status==='Busy' ? true : false}>Busy</option>
                                    <option value="Offline" selected={user.status==='Offline' ? true : false}>Offline</option>
                                </FormInput>
                            </div>
                            <div>
                                <label>Username:</label>
                                <FormInput type="text" placeholder={user.username}  inputRef={usernameInput}/>
                            </div>
                            <div>
                                <label>First name:</label>
                                <FormInput type="text" placeholder={user.firstName}  inputRef={firstNameInput}/>
                            </div>
                            <div>
                                <label>Last name:</label>
                                <FormInput type="text" placeholder={user.lastName} inputRef={lastNameInput}/>
                            </div>
                            <h3>Change account password:</h3>
                            <div>
                                <label>Old Password:</label>
                                <FormInput type="password"  inputRef={oldPasswordInput}/>
                            </div>
                            <div>
                                <label>New Password:</label>
                                <FormInput type="password"  inputRef={newPasswordInput}/>
                            </div>
                            <Button btnType='primary-form' click={profileUpdateHandler}>Confirm</Button>
                            <Button to='/main/convs' btnType='secondary-form'>Cancel</Button>
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
