

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