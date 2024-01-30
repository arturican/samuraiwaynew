import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import {addMessageAC, DialogsActionsType, updateNewMessageTextAC} from "../../state/reducer/dialogs-reducer";




export type DialogsProps = {
    message: MessageProps[]
    dispatch: (action: DialogsActionsType) => void
    newMessageText: string
}

export type MessageProps = {
    id: string
    name: string
    img: string
    text: string
}


export const Dialogs = (props: DialogsProps) => {
    let addMessage = () => {
        props.dispatch(addMessageAC())
    }
    let onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value))
    }
    return (
        <div>
            {props.message.map(el=>
                <Message key={el.id}
                         id={el.id}
                         img={el.img}
                         text={el.text}
                         name={el.name}/>)}
            <textarea value={props.newMessageText} onChange={onChangeText}></textarea>
            <button onClick={addMessage}>send</button>
        </div>
    );
};

