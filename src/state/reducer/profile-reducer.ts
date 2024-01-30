import {ActionsType, ProfileStateType} from "../store";
import {v1} from "uuid";


let initialState =  {
    post: [
        {
            id: v1(),
            like: 1000,
            img: 'http://tinyurl.com/yfm49k2p',
            text: 'Привет! 🎨 Делюсь логотипом для благотворительного фонда. Волнительно создавать дизайн,' +
                ' который поддержит наше сообщество. ❤️ Надеюсь, он привлечет внимание к важному проекту!' +
                ' #графическийдизайн #логотип #благотворительность'
        },
        {
            id: v1(),
            like: 100,
            img: 'http://tinyurl.com/yfm49k2p',
            text: 'Искусство в каждой детали! ✨ Создаю уникальные дизайны, вдохновляясь миром вокруг. Погрузитесь в креатив!' +
                ' #графическийдизайн #творчество'
        },
    ],
        newPostText: '',
}

export const profileReducer = (state: ProfileStateType = initialState, action: ActionsType): ProfileStateType => {
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