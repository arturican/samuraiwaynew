import {ActionsType, ProfileStateType} from "../store";
import {v1} from "uuid";

export const profileReducer = (state: ProfileStateType, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost = {
                id: v1(),
                like: 0,
                text: state.newPostText,
                img: 'http://tinyurl.com/yfm49k2p'
            }

            state.post.push(newPost)
            state.newPostText = ''
            return state

        }
        case "UPDATE-NEW-POST-TEXT": {
            state.newPostText = action.value
            return state
        }
        default : {
            return state
        }

    }
}

export type ProfileActionsType = AddPostType | UpdateNewPostTextType
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