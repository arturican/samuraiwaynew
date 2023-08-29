import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    name: string
    id: number
}

export type MessagePropsType = {
    message: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
    )
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem id={1} name={"Artur"}/>
                <DialogItem id={2} name={"Dilpopo"}/>
            </div>
            <div className={s.message}>
                <Message message={'Hi'}/>
                <Message message={'Lol kek'}/>
            </div>
        </div>

    );
};

