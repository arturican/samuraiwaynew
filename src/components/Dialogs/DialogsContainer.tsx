import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../state/reducer/dialogs-reducer";
import {store} from "../../state/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

export const DialogsContainer = () => {

   let  addMessage =() =>{
        store.dispatch(addMessageAC())
    }
    let onChangeText = (text: string) => {
        store.dispatch(updateNewMessageTextAC(text))
    }
    return (
        <Dialogs message={store.getState().pageDialogs.message}
                 newMessageText={store.getState().pageDialogs.newMessageText}
                 addMessage={addMessage}
                 onChangeText={onChangeText}
        />
    );
};

/*
const mapToStateToProps = () => {
    return {
        message: store.getState().pageDialogs.message,
        newMessageText: store.getState().pageDialogs.newMessageText
    }
}

const mapToDispatchProps = () => {
    return {
        addMessage() {
            store.dispatch(addMessageAC())
        },
        onChangeText(text: string) {
            store.dispatch(updateNewMessageTextAC(text))
        }
    }
}
export const SDialogsContainer = connect(mapToStateToProps, mapToDispatchProps)(Dialogs)*/
