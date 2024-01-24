import {v1} from "uuid";
import {ActionsType} from "./ActionCreater";



type PostType = {
    id: string;
    like: number;
    img: string;
    text: string;
};

type MessageType = {
    id: string;
    name: string;
    img: string;
    text: string;
};

// Тип для глобального состояния
type GlobalStateType = {
    pageProfile: {
        post: PostType[];
        newPostText: string;
    };
    message: MessageType[];
};

// Тип для функции rerenderEntireTree
type CallSubscribe = () => void;



// Определение типа для Store
type StoreType = {
    _callSubscribe: CallSubscribe;
    _state: GlobalStateType;
    getState: () => GlobalStateType;
    addPost: () => void;
    updateNewPostText: (value: string) => void;
    dispatch:(action: ActionsType) => void
    subscribe: (observer: CallSubscribe) => void;
};

export const store: StoreType = {
    _callSubscribe() {
        console.log('state change')
    },
    _state: {
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
    },
    getState() {
        return this._state
    },
    addPost() {
        let newPost = {
            id: v1(),
            like: 0,
            text: this._state.pageProfile.newPostText,
            img: 'http://tinyurl.com/yfm49k2p'

        }
        this._state.pageProfile.post.push(newPost)
        this._callSubscribe()
    },
    updateNewPostText(value: string) {
        this._state.pageProfile.newPostText = value
        this._callSubscribe()
    },
    dispatch(action: ActionsType) {
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: v1(),
                like: 0,
                text: this._state.pageProfile.newPostText,
                img: 'http://tinyurl.com/yfm49k2p'

            }
            this._state.pageProfile.post.push(newPost)
            this.updateNewPostText('')
            this._callSubscribe()
        }else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.pageProfile.newPostText = action.value
            this._callSubscribe()
        }
    },
    subscribe(observer: any) {
        this._callSubscribe = observer
    }
}




