import React from 'react';
import classes from './SignedUpPage.module.css';
import Logo from '../../elements/Logo/Logo';
import LargeBtn from '../../elements/LargeBtn/LargeBtn';
import SmallBtn from '../../elements/SmallBtn/SmallBtn';
import picture from '../../assets/icons/picture.svg';

const signedUpPage = (props: any) => {
    return (
        <div className={classes.SignedUpPage}>
            <div className={classes.Header}>
                <Logo width="80px"/>
                <h2>Account created !</h2>
            </div>

            <div className={classes.PictureUpload}>
                <p>Choose a profile picture</p>
                <LargeBtn>
                    <img src={picture} alt='Upload pic' />
                    Upload a picture
                </LargeBtn>
                <span>No file selected</span>
            </div>

            <div className={classes.Footer}>
                <SmallBtn>Skip</SmallBtn>
                <SmallBtn>Continue</SmallBtn>
            </div>    

        </div>
    )
}

export default signedUpPage;
