import {ActionsType, DialogsStateType} from "../store";
import {v1} from "uuid";

let initialState = {
    message: [
        {
            id: v1(),
            name: 'Artur',
            img: 'https://clck.ru/37dCXs',
            text: 'Привет, Диляра'
        },
        {
            id: v1(),
            name: 'Dilyara',
            img: 'http://tinyurl.com/yfm49k2p',
            text: 'Привет, Артур'
        },
    ],
    newMessageText: ''

}

export const dialogsReducer = (state: DialogsStateType = initialState, action: ActionsType): DialogsStateType => {
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