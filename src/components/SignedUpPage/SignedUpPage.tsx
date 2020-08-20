import React from 'react';
import classes from './SignedUpPage.module.css';
import Logo from '../../elements/Logo/Logo';
import LargeBtn from '../../elements/LargeBtn/LargeBtn';
import SmallBtn from '../../elements/SmallBtn/SmallBtn';
import picture from '../../assets/icons/picture.svg';
import { Redirect, NavLink, Link } from 'react-router-dom';

const signedUpPage = (props: any) => {
    let authRedirect = null;

    if (!props.isAuth) {
        authRedirect = <Redirect to='/'/>
    }
    return (
        <div className={classes.Container}>
            {authRedirect}
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
                    <SmallBtn><Link to='/home'>Skip</Link></SmallBtn>
                    <SmallBtn>Continue</SmallBtn>
                </div>    

            </div>
            <div className={classes.SideLogo}>
                <Logo width="80px"/>
            </div>
        </div>

    )
}

export default signedUpPage;
