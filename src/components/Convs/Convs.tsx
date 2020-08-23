import React from 'react';
import classes from './Convs.module.css';
import Conv from './Conv/Conv';


const convs = (props: any) => {
    let convs: [] = props.convs;
    let displayedConvs = convs.map((conv: {_id: string, fullName: string}) => (
        <Conv fullname={conv.fullName} key={conv._id} id={conv._id} convSelect={props.convSelect}/>
    ))
    return (
        <ul className={classes.Convs}>
            {displayedConvs}
        </ul>
    )
}

export default convs;
