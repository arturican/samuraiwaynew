import {ActionsType, DialogsStateType} from "../store";
import {v1} from "uuid";

export const dialogsReducer = (state: DialogsStateType, action: ActionsType): DialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = {
                id: v1(),
                name: 'Dilyara',
                img: 'http://tinyurl.com/yfm49k2p',
                text: state.newMessageText,
            }
            state.message.push(newMessage)
            state.newMessageText = ''
            return state
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            state.newMessageText = action.value
            return state
        }
        default : {
            return state
        }

    }
}

export type DialogsActionsType = AddMessageType | UpdateNewPostMessageType
type AddMessageType = ReturnType<typeof addMessageAC>
export const addMessageAC = () => ({
        type: 'ADD-MESSAGE'
    } as const
)

type UpdateNewPostMessageType = ReturnType<typeof updateNewMessageTextAC>
export const updateNewMessageTextAC = (value: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    value: value
} as const)