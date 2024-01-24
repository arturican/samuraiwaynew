export type ActionsType = AddPostType | UpdateNewPostTextType
type AddPostType = ReturnType<typeof addPost>
export const addPost = () => {
    return {
        type: 'ADD-POST'
    } as const
}

type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (value: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        value: value
    } as const
}