import React from 'react'
import classes from './LandingImage.module.scss';
import landingImage from '../../assets/landing-page-image.jpg';

const LandingImage = () => {
    return (
        <div className={classes.LandingImage}>
            <img src={landingImage} alt="" />
        </div>
    )
}

export default LandingImage
