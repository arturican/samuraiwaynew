export type ActionsType = AddPostType | UpdateNewPostTextType |  AddMessageType | UpdateNewPostMessageType
type AddPostType = ReturnType<typeof addPostAC>
export const addPostAC = () => ({
        type: 'ADD-POST'
    } as const
)

type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (value: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    value: value
} as const)

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