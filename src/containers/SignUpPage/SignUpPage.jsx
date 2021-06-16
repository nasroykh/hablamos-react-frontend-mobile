import React, {useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom'
import classes from './SignUpPage.module.scss';
import {ReactComponent as ImageIcon} from '../../assets/file-icon.svg';
import Logo from '../../elements/Logo/Logo';
import Button from '../../elements/Button/Button';
import FormInput from '../../elements/FormInput/FormInput';
import {signUp} from '../../store/auth/auth-actions';
import {uploadPicture} from '../../store/user/user-actions';
import Auxiliary from '../../hoc/Auxiliary';

const SignUpPage = () => {

    const dispatch = useDispatch();

    const [fileUploaded, setFileUploaded] = useState({});

    const pictureUploaded = useSelector(state => state.user.pictureUploaded);
    const isAuth = useSelector(state => state.auth.isAuth);

    const usernameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const firstNameInput = useRef();
    const lastNameInput = useRef();

    const signUpHandler = (e) => {
        e.preventDefault();

        let signUpInfos = {
            username: usernameInput.current.value,
            email: emailInput.current.value,
            password: passwordInput.current.value,
            firstName: firstNameInput.current.value,
            lastName: lastNameInput.current.value,
        };

        dispatch(signUp(signUpInfos));

    }

    const pictureUploadChangeHandler = (e) => {
        setFileUploaded(e.target.files[0]);
    }

    const pictureUploadHandler = (e) => {
        e.preventDefault();

        let pictureToUpload = new FormData();

        pictureToUpload.append('picture', fileUploaded);

        dispatch(uploadPicture(pictureToUpload));
    }
    
    return (
        <div className={classes.SignUpPage}>
            <Logo text />
            {pictureUploaded ? <Redirect to='/main/convs'/> : null}

                {isAuth ? 
                    <Auxiliary>
                        <h2>Choose a profile picture</h2>
                        <div className={classes.PictureUpload}>
                        <label>
                            <input type="file" accept='image/*' onChange={pictureUploadChangeHandler}/>
                            Upload a picture
                            <ImageIcon/>
                        </label>
                        <span>{fileUploaded.name}</span>
                        </div>
                        <div className={classes.PictureButtons}>
                            <Button btnType='primary-form' click={pictureUploadHandler}>Confirm</Button>
                            <Button btnType='secondary' to='/main/convs'>Skip</Button>
                        </div>
                    </Auxiliary> :
                    <Auxiliary>
                        <h2>Sign up now for free to chat with your friends!</h2>
                        <form className={classes.SignUpForm} onSubmit={signUpHandler}>
                            <FormInput 
                                sign 
                                type="text" 
                                placeholder="Username (Required)"                    
                                inputRef={usernameInput}
                                name='username'
                                required/>
                            <FormInput 
                                sign 
                                type="email" 
                                placeholder="Email (Required)"                    
                                inputRef={emailInput}
                                name='email'
                                required/>
                            <FormInput 
                                sign 
                                type="password" 
                                placeholder="Password (Required)"                    
                                inputRef={passwordInput}
                                name='password'
                                required/>
                            <FormInput 
                                sign 
                                type="text" 
                                placeholder="First name"                    
                                inputRef={firstNameInput}
                                name='firstName'/>
                            <FormInput 
                                sign 
                                type="text" 
                                placeholder="Last name"                    
                                inputRef={lastNameInput}
                                name='lastName'/>
                            <Button btnType='primary-form'>Confirm</Button>
                            <Button btnType='secondary-form' to='/'>Cancel</Button>
                        </form>
                    </Auxiliary>}
        </div>
    )
}

export default SignUpPage
