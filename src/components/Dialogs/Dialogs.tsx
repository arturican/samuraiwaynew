import React from 'react';
import {Message} from "./Message/Message";

export type DialogsProps = {
    message: MessageProps[]
    newMessageText: string
    onChangeText: (text: string) => void
    addMessage: () => void
}

export type MessageProps = {
    id: string
    name: string
    img: string
    text: string
}

export const Dialogs = (props: DialogsProps) => {
    return (
        <div>
            {props.message.map(el=>
                <Message key={el.id}
                         id={el.id}
                         img={el.img}
                         text={el.text}
                         name={el.name}/>)}
            <textarea value={props.newMessageText} onChange={(e)=>props.onChangeText(e.currentTarget.value)}></textarea>
            <button onClick={props.addMessage}>send</button>
        </div>
    );
};

