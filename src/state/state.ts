import {v1} from "uuid";
import {PostProps} from "../components/Profile/Profile";


export type StateProps = {
    post: PostProps[]
    message: any
}

export const state: StateProps = {
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