import React from 'react'
import classes from './Tab.module.scss';
import Auxiliary from '../../hoc/Auxiliary';
import Button from '../../elements/Button/Button';
import Convs from '../Convs/Convs';
import Contacts from '../Contacts/Contacts';
import FormInput from '../../elements/FormInput/FormInput';

const Tab = (props) => {
    let tab;

    switch (props.tabName) {
        case 'convs':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Conversations</h2>
                        <Button to='/main/addconv' btnType='add-conv'/>
                    </div>
                    <Convs/>
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
                    <Contacts/>
                </Auxiliary>
            );
            break;

        case 'friends':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Friends</h2>
                        <Button to='/main/addtogroup' btnType='group'/>
                        <Button to='/main/addcontact' btnType='add-contact'/>
                    </div>
                    <Contacts/>
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
                    <FormInput type='search' placeholder='Enter username...'/>
                    <Contacts search/>
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
                    <FormInput type='search' placeholder='Enter username...'/>
                    <Contacts search group/>
                    <Button btnType='primary' to='/main/creategroup'>Confirm</Button>
                </Auxiliary>
            );
            break;

        case 'creategroup':
            tab = (
                <Auxiliary>
                    <div className={classes.TabHeader}>
                        <h2>Create a group chat</h2>
                        <Button to='/main/addtogroup' btnType='back-btn'/>
                    </div>
                    <FormInput type='search' placeholder='Enter group name...'/>
                    <Button btnType='primary'>Confirm</Button>
                    <Button btnType='secondary' to='/main/addtogroup'>Cancel</Button>
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
