import React from 'react'
import classes from './ChatInput.module.css'
import emoji from '../../assets/icons/smile 1.svg';
import send from '../../assets/icons/SendBtn.svg';
import image from '../../assets/icons/picture 1 (1).svg';

const chatInput = (props: any) => {

    return (
        <form className={classes.ChatInput} onSubmit={props.sendMessage}>
            <input type="image" alt="" src={emoji} className={classes.Emoji}/>
            <input type="text" className={classes.TextInput} placeholder='Type here' value={props.msgValue} onChange={props.msgChange}/>
            <input type="image" alt="" src={image} className={classes.Image}/>
            <input type="image" alt="" src={send} className={classes.Send} onClick={props.sendMessage}/>
        </form>
    )
}

export default chatInput
