import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../elements/Button/Button';
import classes from './DialogBox.module.scss';
import {userActions} from '../../store/user/user-slice';

const DialogBox = (props) => {

    const dialogText = useSelector(state => state.user.dialogText);

    const dispatch = useDispatch();

    const dialogBoxCloseHandler = () => {
        dispatch(userActions.closeDialogBox());
    }

    return (
        <div className={`${classes.DialogBox} ${dialogText ? classes.Show : ''}`}>
            <h2>{dialogText}</h2>
            <Button btnType='primary-form' click={dialogBoxCloseHandler}>Close</Button>
        </div>
    )
}

export default DialogBox;
