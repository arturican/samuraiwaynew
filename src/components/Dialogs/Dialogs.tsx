import React from 'react';
import {Message} from "./Message/Message";




export type DialogsProps = {
    message: MessageProps[]
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
        </div>
    );
};

