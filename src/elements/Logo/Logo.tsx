import React from 'react';
import Aux from '../../hoc/Aux';
import logoS from '../../assets/images/LogoSmall.svg';
import logoM from '../../assets/images/LogoMedium.svg';
import logoL from '../../assets/images/LogoLarge.svg';

const logo = (props: any) => {
    let logo = logoM;

    switch (props.size) {
        case ("small") : logo = logoS 
            break;
        case ("medium") : logo = logoM 
            break;
        case ("large") : logo = logoL 
            break;
    
        default:
            break;
    }
    return (
        <Aux>
            <input type="image" src={logo} alt="Hablamos Logo" />
        </Aux>
    )
}

export default logo;