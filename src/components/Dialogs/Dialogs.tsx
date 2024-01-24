import React, {ChangeEvent} from 'react';
import {Message} from "./Message/Message";
import {
    ActionsType,
    addMessageAC,
    updateNewMessageTextAC,
} from "../../state/ActionCreater";




export type DialogsProps = {
    message: MessageProps[]
    dispatch: (action: ActionsType) => void
    newMessageText: string
}

export type MessageProps = {
    id: string
    name: string
    img: string
    text: string
}


export const Dialogs = (props: DialogsProps) => {
    let addPost = () => {
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
            <button onClick={addPost}>send</button>
        </div>
    );
};

