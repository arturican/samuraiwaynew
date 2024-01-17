import {v1} from "uuid";
import {PostProps} from "../components/Profile/Profile";

let rerenderEntireTree = () => {
    console.log('state change')
}


export type StateProps = {
    pageProfile: {
        post: PostProps[]
        newPostText: string
    }

    message: any
}


export const state: StateProps = {
    pageProfile: {
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
    },


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

    ]
}

export const addPost = () => {
    let newPost = {
        id: v1(),
        like: 0,
        text: state.pageProfile.newPostText,
        img: 'http://tinyurl.com/yfm49k2p'

    }
    state.pageProfile.post.push(newPost)
    console.log(state.pageProfile.post)
    rerenderEntireTree()

}

export const updateNewPostText = (value: string) => {
    state.pageProfile.newPostText = value
    console.log(state.pageProfile.newPostText)
    rerenderEntireTree()
}

export const subscribe = (observer: any) => {
    rerenderEntireTree=observer
}



