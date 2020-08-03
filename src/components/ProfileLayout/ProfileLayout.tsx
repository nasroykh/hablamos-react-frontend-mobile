import React from 'react';
import classes from './ProfileLayout.module.css';
import AuthInput from '../../elements/AuthInput/AuthInput';
import SmallBtn from '../../elements/SmallBtn/SmallBtn';
import picture from '../../assets/icons/picture.svg';

const profileLayout = (props: any) => {

    const formElementsArray = [];
    for (let key in props.profileEditForm) {
        formElementsArray.push({
            id: key,
            config: props.profileEditForm[key]
        });
    }

    return (
        <div className={classes.ProfileLayout}>
            <div className={classes.Header}>
                <h2>Profile</h2>
            </div>
            <div className={classes.Profile}>
                <div className={classes.ProfileTitle}>
                    <h3>Account infos</h3>
                </div>
                <form className={classes.PEForm}>
                    {formElementsArray.map(formElement => (
                        <AuthInput 
                            key={formElement.id}
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            name={formElement.config.name} />
                    ))}
                </form>
                <div className={classes.ProfileTitle}>
                    <h3>Profile picture</h3>
                </div>                
                <div className={classes.PictureUpload}>
                    <SmallBtn>
                        <img src={picture} alt='Upload pic' />
                        Upload a picture
                    </SmallBtn>
                    <span>No file selected</span>
                </div>
                <div className={classes.Footer}>
                    <SmallBtn>Cancel</SmallBtn>
                    <SmallBtn>Continue</SmallBtn>
                </div>    
            </div>
        </div>
    )
}

export default profileLayout;
