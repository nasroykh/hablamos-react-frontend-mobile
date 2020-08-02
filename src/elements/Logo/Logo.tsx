import React from 'react';
import Aux from '../../hoc/Aux';
import logoH from '../../assets/images/HablamosLogo.svg';

const logo = (props: any) => {
    return (
        <Aux>
            <input type="image" src={logoH} alt="Hablamos Logo" width={props.width}/>
        </Aux>
    )
}

export default logo;